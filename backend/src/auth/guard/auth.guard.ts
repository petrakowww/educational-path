import {
    ContextRequestType,
    SessionRequest,
} from '@/config/types/context-request.type';
import { UserService } from '@/user/user.service';

import { JwtService } from '../jwt/jwt.service';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtPayload } from '../jwt/jwt.payload';

// Type for the request

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const isGraphQL = context.getType<ContextRequestType>() === 'graphql';

        let request: SessionRequest;

        if (isGraphQL) {
            const gqlContext = GqlExecutionContext.create(context);
            request = gqlContext.getContext<{ req: SessionRequest }>().req;
        } else {
            request = context.switchToHttp().getRequest<SessionRequest>();
        }

        const accessToken = request.cookies[
            this.jwtService.ACCESS_TOKEN_COOKIE_NAME
        ] as string;

        if (accessToken) {
            try {
                const payload =
                    this.jwtService.verifyAccessToken<JwtPayload>(accessToken);
                request.user = await this.userService.findById(payload.userId);
            } catch {
                console.warn('Access token invalid, attempting refresh...');

                const refreshedPayload =
                    await this.jwtService.validateOrRefreshAccessToken(
                        request,
                        context.switchToHttp().getResponse(),
                    );
                request.user = await this.userService.findById(
                    refreshedPayload.userId,
                );
            }
        } else {
            const refreshedPayload =
                await this.jwtService.validateOrRefreshAccessToken(
                    request,
                    context.switchToHttp().getResponse(),
                );
            request.user = await this.userService.findById(
                refreshedPayload.userId,
            );
        }

        if (!request.user) {
            throw new UnauthorizedException('User not authenticated');
        }

        return true;
    }
}
