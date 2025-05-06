import { PrismaService } from '@/prisma/prisma.service';

import { CreateTopicContentDto } from './dto/create-topic-content.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class TopicContentService {
    constructor(private readonly prisma: PrismaService) {}

    async findByRouteAndNode(routeId: string, nodeId: string) {
        return this.prisma.topicContent.findUnique({
            where: {
                routeId_nodeId: { routeId, nodeId },
            },
        });
    }

    async findAllByRoute(routeId: string) {
        return this.prisma.topicContent.findMany({
            where: { routeId },
        });
    }

    async create(data: CreateTopicContentDto) {
        return this.prisma.topicContent.create({ data });
    }

    async delete(routeId: string, nodeId: string) {
        await this.prisma.topicContent.delete({
            where: {
                routeId_nodeId: { routeId, nodeId },
            },
        });
        return true;
    }

    async syncContentsTransactional(
        prisma: Prisma.TransactionClient,
        routeId: string,
        contents: CreateTopicContentDto[],
    ) {
        const nodeIdsToKeep = contents.map(c => c.nodeId);

        await prisma.topicContent.deleteMany({
            where: {
                routeId,
                nodeId: { notIn: nodeIdsToKeep },
            },
        });

        const operations = contents.map(content =>
            prisma.topicContent.upsert({
                where: {
                    routeId_nodeId: {
                        routeId,
                        nodeId: content.nodeId,
                    },
                },
                update: {},
                create: {
                    routeId,
                    nodeId: content.nodeId,
                },
            }),
        );

        await Promise.all(operations);
    }
}
