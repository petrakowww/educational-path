import { SaveTopicMapInput } from './dto/save-topic-map.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TopicMap, User } from '@prisma/__generated__';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicMapService {
    constructor(private prisma: PrismaService) {}

    async saveTopicMap(input: SaveTopicMapInput): Promise<TopicMap> {
        const { routeId, nodes = [], edges = [] } = input;

        return this.prisma.$transaction(async tx => {
            // 1. Убедимся, что карта существует
            const topicMap = await tx.topicMap.upsert({
                where: { routeId },
                create: { routeId },
                update: {},
            });

            const topicMapId = topicMap.id;

            // 2. Получаем существующие ID узлов и рёбер
            const existingNodeIds = new Set(
                (
                    await tx.topicNode.findMany({
                        where: { topicMapId },
                        select: { id: true },
                    })
                ).map(n => n.id),
            );

            const existingEdgeIds = new Set(
                (
                    await tx.topicEdge.findMany({
                        where: { topicMapId },
                        select: { id: true },
                    })
                ).map(e => e.id),
            );

            // 3. Удаляем устаревшие узлы и рёбра
            const incomingNodeIds = new Set(nodes.map(n => n.id));
            const incomingEdgeIds = new Set(edges.map(e => e.id));

            const nodesToDelete = Array.from(existingNodeIds).filter(
                id => !incomingNodeIds.has(id),
            );
            if (nodesToDelete.length > 0) {
                await tx.topicNode.deleteMany({
                    where: { id: { in: nodesToDelete } },
                });
            }

            const edgesToDelete = Array.from(existingEdgeIds).filter(
                id => !incomingEdgeIds.has(id),
            );
            if (edgesToDelete.length > 0) {
                await tx.topicEdge.deleteMany({
                    where: { id: { in: edgesToDelete } },
                });
            }

            for (const node of nodes) {
                const hasChecklist =
                    node.checklist && node.checklist.length > 0;

                const commonData = {
                    title: node.title,
                    type: node.type,
                    meta: node.meta,
                    zIndex: node.zIndex ?? null,
                    ...(node.posxy && { posxy: node.posxy }),
                };

                if (node.id && existingNodeIds.has(node.id)) {
                    await tx.topicNode.update({
                        where: { id: node.id },
                        data: {
                            ...commonData,
                            ...(hasChecklist && {
                                checklist: {
                                    deleteMany: {},
                                    create: node.checklist.map(item => ({
                                        text: item.text,
                                    })),
                                },
                            }),
                        },
                    });
                } else {
                    await tx.topicNode.create({
                        data: {
                            id: node.id,
                            ...commonData,
                            topicMapId,
                            ...(hasChecklist && {
                                checklist: {
                                    create: node.checklist.map(item => ({
                                        text: item.text,
                                    })),
                                },
                            }),
                        },
                    });
                }
            }

            // 5. Обрабатываем рёбра
            for (const edge of edges) {
                const edgeData = {
                    sourceId: edge.sourceId,
                    targetId: edge.targetId,
                    meta: edge.meta,
                };

                if (edge.id && existingEdgeIds.has(edge.id)) {
                    await tx.topicEdge.update({
                        where: { id: edge.id },
                        data: edgeData,
                    });
                } else {
                    await tx.topicEdge.create({
                        data: {
                            id: edge.id,
                            ...edgeData,
                            topicMapId,
                        },
                    });
                }
            }

            // 6. Возвращаем актуальную карту
            return tx.topicMap.findUniqueOrThrow({
                where: { routeId },
                include: {
                    nodes: { include: { checklist: true } },
                    edges: true,
                    UserCourse: true,
                    route: true,
                },
            });
        });
    }

    async deleteTopicMap(routeId: string): Promise<void> {
        await this.prisma.topicMap.delete({
            where: { routeId },
        });
    }

    async getTopicMap(routeId: string): Promise<TopicMap> {
        const topicMap = await this.prisma.topicMap.findUnique({
            where: { routeId },
            include: {
                nodes: {
                    include: {
                        checklist: true,
                    },
                },
                edges: true,
                UserCourse: true,
                route: {
                    include: {
                        user: true,
                    },
                },
            },
        });

        if (!topicMap) {
            throw new NotFoundException(
                `Карта темы с идентификатором маршрута "${routeId}" не найдена`,
            );
        }

        return topicMap;
    }

    async getUserTopicMap(user: User, routeId: string): Promise<TopicMap> {
        const topicMap = await this.prisma.topicMap.findFirst({
            where: { routeId },
            include: {
                nodes: {
                    include: {
                        checklist: true,
                    },
                },
                edges: true,
                route: {
                    include: {
                        user: true,
                    },
                },
                UserCourse: {
                    where: {
                        userId: user.id,
                    },
                },
            },
        });

        if (!topicMap) {
            throw new NotFoundException(
                `Карта темы с идентификатором маршрута "${routeId}" не найдена`,
            );
        }

        return topicMap;
    }
}
