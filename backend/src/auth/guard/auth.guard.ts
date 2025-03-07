import { Response } from 'express';

import { ContextRequestType } from '@/config/types/context-request.type';
import { UserService } from '@/user/user.service';

import { JwtService } from '../jwt/jwt.service';
import { JwtPayload } from '../jwt/jwt.types';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserRequest } from '@/config/types/context-request.type';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const { request, response } = this.contextRequestType(context);

        const accessToken = this.jwtService.getToken(request, 'Access Token');

        if (accessToken) {
            try {
                const payload =
                    this.jwtService.verifyAccessToken<JwtPayload>(accessToken);
                request.user = await this.userService.findById(payload.userId);
                return true;
            } catch {
                console.warn('Access token invalid or expired');
            }
        }

        await this.tryRefreshToken(request, response);

        if (!request.user) {
            throw new UnauthorizedException('User not authenticated');
        }

        return true;
    }

    private contextRequestType(context: ExecutionContext) {
        const isGraphQL = context.getType<ContextRequestType>() === 'graphql';
        let request: UserRequest;
        let response: Response;

        if (isGraphQL) {
            const gqlContext = GqlExecutionContext.create(context);
            request = gqlContext.getContext<{ req: UserRequest }>().req;
            response = gqlContext.getContext<{ res: Response }>().res;
        } else {
            request = context.switchToHttp().getRequest<UserRequest>();
            response = context.switchToHttp().getResponse<Response>();
        }

        return { request, response };
    }

    private async tryRefreshToken(
        request: UserRequest,
        response: Response,
    ): Promise<void> {
        try {
            const { accessToken, refreshToken } =
                await this.jwtService.refreshTokens(request);

            this.jwtService.setTokenCookie(
                response,
                accessToken,
                'Access Token',
            );
            this.jwtService.setTokenCookie(
                response,
                refreshToken,
                'Refresh Token',
            );

            const payload =
                this.jwtService.verifyAccessToken<JwtPayload>(accessToken);
            request.user = await this.userService.findById(payload.userId);
        } catch {
            throw new UnauthorizedException('User not authenticated');
        }
    }
}
