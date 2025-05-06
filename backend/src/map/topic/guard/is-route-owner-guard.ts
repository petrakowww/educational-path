import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class IsRouteOwnerGuard implements CanActivate {
    constructor(private readonly prisma: PrismaService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlCtx = GqlExecutionContext.create(context).getContext();
        const userId = gqlCtx.req.user?.id;
        const args = GqlExecutionContext.create(context).getArgs();

        const topicMapId = args?.id || args?.args?.id;

        const topicMap = await this.prisma.topicMap.findUnique({
            where: { id: topicMapId },
            include: { route: true },
        });

        return topicMap?.route?.userId === userId;
    }
}
