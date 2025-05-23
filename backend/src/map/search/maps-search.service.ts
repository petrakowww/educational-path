import { isProgressableType } from '@/libs/common/utils/is-progressable.util';
import { PrismaService } from '@/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/__generated__';

type RouteWithAll = Prisma.RouteGetPayload<{
    include: {
        user: true;
        tags: { include: { tag: true } };
        topicMap: {
            include: {
                nodes: {
                    include: {
                        type: true; // можно опустить, так как идёт вместе с остальным
                        checklist: true;
                        VideoCourse: true;
                        UserTopicProgress: true;
                    };
                };
                edges: true;
                UserCourse: true;
            };
        };
    };
}> & {
    topicCount: number;
};
@Injectable()
export class MapsSearchService {
    constructor(private readonly prisma: PrismaService) {}

    async searchRoutes(params: {
        search?: string;
        tags?: string[];
        verifiedOnly?: boolean;
        type?: 'PUBLIC' | 'PRIVATE' | 'ALL';
        hasVideo?: boolean;
        dateStart?: Date;
        dateEnd?: Date;
        topicCountRange?: [number, number];
        sortBy?: 'recency' | 'popularity';
        page?: number;
        pageSize?: number;
    }): Promise<{ results: RouteWithAll[]; total: number }> {
        const {
            search,
            tags,
            verifiedOnly,
            type = 'ALL',
            hasVideo,
            dateStart,
            dateEnd,
            topicCountRange,
            sortBy = 'recency',
            page = 1,
            pageSize = 6,
        } = params;

        let routeIdsByTopicsCount: string[] | null = null;
        if (topicCountRange) {
            const topicMaps = await this.prisma.topicMap.findMany({
                include: {
                    nodes: {
                        select: { type: true },
                    },
                },
            });

            routeIdsByTopicsCount = topicMaps
                .filter(map => {
                    const count = map.nodes.filter(node =>
                        isProgressableType(node.type),
                    ).length;
                    return (
                        count >= topicCountRange[0] &&
                        count <= topicCountRange[1]
                    );
                })
                .map(map => map.routeId);
        }

        // WHERE фильтрация
        const where: Prisma.RouteWhereInput = {
            AND: [
                type === 'ALL'
                    ? { privateType: 'GENERAL' }
                    : {
                          privateType:
                              type === 'PUBLIC' ? 'GENERAL' : 'PRIVATE',
                      },
                verifiedOnly ? { isVerified: 'VERIFIED' } : {},
                search
                    ? {
                          OR: [
                              {
                                  title: {
                                      contains: search,
                                      mode: 'insensitive',
                                  },
                              },
                              {
                                  user: {
                                      name: {
                                          contains: search,
                                          mode: 'insensitive',
                                      },
                                  },
                              },
                          ],
                      }
                    : {},
                hasVideo
                    ? {
                          topicMap: {
                              nodes: {
                                  some: {
                                      VideoCourse: { some: {} },
                                  },
                              },
                          },
                      }
                    : {},
                dateStart ? { createdAt: { gte: dateStart } } : {},
                dateEnd ? { createdAt: { lte: dateEnd } } : {},
                tags?.length
                    ? {
                          tags: {
                              some: {
                                  tag: {
                                      name: { in: tags },
                                  },
                              },
                          },
                      }
                    : {},
                routeIdsByTopicsCount
                    ? { id: { in: routeIdsByTopicsCount } }
                    : {},
            ],
        };

        

        const orderBy: Prisma.RouteOrderByWithRelationInput =
            sortBy === 'popularity'
                ? { topicMap: { UserCourse: { _count: 'desc' } } }
                : { createdAt: 'desc' };

        const [total, routes] = await Promise.all([
            this.prisma.route.count({ where }),
            this.prisma.route.findMany({
                where,
                orderBy,
                skip: (page - 1) * pageSize,
                take: pageSize,
                include: {
                    user: true,
                    tags: { include: { tag: true } },
                    topicMap: {
                        include: {
                            nodes: {
                                include: {
                                    checklist: true,
                                    VideoCourse: true,
                                    UserTopicProgress: true,
                                },
                            },
                            edges: true,
                            UserCourse: true,
                        },
                    },
                },
            }),
        ]);

        // Вычисление topicCount
        const results: RouteWithAll[] = routes.map(route => ({
            ...route,
            topicCount:
                route.topicMap?.nodes?.filter(n => isProgressableType(n.type))
                    .length ?? 0,
        }));

        return { results, total };
    }
}
