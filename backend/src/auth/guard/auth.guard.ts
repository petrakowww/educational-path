import { UserService } from '@/user/user.service';

import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/__generated__';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private readonly userService: UserService) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context
            .switchToHttp()
            .getRequest<{ session: { userId?: string }; user?: User }>();

        if (!request.session.userId) {
            throw new UnauthorizedException(
                'The user is not logged in. Please log in to gain access.',
            );
        }

        const user = await this.userService.findById(request.session.userId);

        request.user = user;

        return true;
    }
}
