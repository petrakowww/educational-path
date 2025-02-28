import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/__generated__';

export const CurrentUser = createParamDecorator(
    (
        data: keyof User | undefined,
        ctx: ExecutionContext,
    ): User | null | User[keyof User] => {
        const request = ctx.switchToHttp().getRequest<{ user?: User }>();
        const user = request.user;

        if (!user) return null;

        return data ? user[data] : user;
    },
);
