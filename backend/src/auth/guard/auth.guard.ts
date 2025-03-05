import { ContextRequestType, SessionRequest } from '@/config/types/context-request.type';
import { UserService } from '@/user/user.service';


import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private readonly userService: UserService) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const isGraphQL = context.getType<ContextRequestType>() === 'graphql';

        let request: SessionRequest;

        if (isGraphQL) {
            const gqlContext = GqlExecutionContext.create(context);
            request = gqlContext.getContext<{ req: SessionRequest }>().req;
        } else {
            request = context.switchToHttp().getRequest<SessionRequest>();
        }

        if (typeof request.session?.userId === 'undefined') {
            throw new UnauthorizedException('The user is not logged in');
        }

        const user = await this.userService.findById(request.session.userId);

        if (!user) {
            throw new UnauthorizedException('The user was not found');
        }

        request.user = user;

        return true;
    }
}
