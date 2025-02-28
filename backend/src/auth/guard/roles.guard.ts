import { ROLES_KEY } from '../decorators/roles.decorator';
import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/__generated__';

@Injectable()
export class RolesGuard implements CanActivate {
    public constructor(private readonly reflector: Reflector) {}

    public canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!roles) return true;

        const request = context
            .switchToHttp()
            .getRequest<{ user?: { role: UserRole } }>();

        if (!request.user || !roles.includes(request.user.role)) {
            throw new ForbiddenException(
                "Not enough rights. You don't have access rights to this resource.",
            );
        }

        return true;
    }
}
