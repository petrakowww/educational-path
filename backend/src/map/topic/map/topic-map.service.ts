import { SaveTopicMapInput } from './dto/save-topic-map.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TopicMap } from '@prisma/__generated__';
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

            // 3. Обрабатываем узлы
            for (const node of nodes) {
                const hasChecklist =
                    node.checklist && node.checklist.length > 0;

                const commonData = {
                    title: node.title,
                    type: node.type,
                    meta: node.meta,
                    completionType: node.completionType,
                    zIndex: node.zIndex ?? null,
                    ...(node.posxy && { posxy: node.posxy }),
                };

                if (node.id && existingNodeIds.has(node.id)) {
                    // Обновление узла + очистка чеклиста
                    await tx.topicNode.update({
                        where: { id: node.id },
                        data: {
                            ...commonData,
                            ...(hasChecklist && {
                                checklist: {
                                    deleteMany: {}, // ← удалить старые
                                    create: node.checklist.map(item => ({
                                        text: item.text,
                                    })),
                                },
                            }),
                        },
                    });
                } else {
                    // Создание нового узла
                    await tx.topicNode.create({
                        data: {
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

            // 4. Обрабатываем рёбра
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
                            ...edgeData,
                            topicMapId,
                        },
                    });
                }
            }

            // 5. Возвращаем всю карту
            return tx.topicMap.findUniqueOrThrow({
                where: { routeId },
                include: {
                    nodes: {
                        include: {
                            checklist: true,
                        },
                    },
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
                route: true,
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
