import { ContextRequestType } from '@/config/types/context-request.type';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

export const CurrentUser = createParamDecorator(
    (data: keyof User | undefined, ctx: ExecutionContext): User | null | User[keyof User] => {
        let user: User | null = null;

        if (ctx.getType<ContextRequestType>() === 'http') {
            const request = ctx.switchToHttp().getRequest<{ user?: User }>();
            user = request.user;
        }

        if (ctx.getType<ContextRequestType>() === 'graphql') {
            const gqlContext = GqlExecutionContext.create(ctx);
            const request = gqlContext.getContext<{ req: { user?: User } }>().req;
            user = request.user;
        }

        if (!user) return null;

        return data ? user[data] : user;
    },
);
