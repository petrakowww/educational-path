import { PrismaService } from '@/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Route, User, VideoCourse } from '@prisma/__generated__';

@Injectable()
export class DashboardService {
    constructor(private readonly prisma: PrismaService) {}

    async getRecentActivity(user: User) {
        const recentUserCourses = await this.prisma.userCourse.findMany({
            where: { userId: user.id },
            orderBy: { updatedAt: 'desc' },
            take: 3,
            include: {
                topicMap: {
                    include: {
                        route: true,
                    },
                },
            },
        });

        const recentRoutes = recentUserCourses
            .map(uc => uc.topicMap?.route)
            .filter((r): r is Route => Boolean(r));

        const recentChapters = await this.prisma.chapterProgress.findMany({
            where: { userId: user.id },
            orderBy: { updatedAt: 'desc' },
            take: 2,
            include: {
                chapter: {
                    include: {
                        course: true,
                    },
                },
            },
        });

        const recentVideoCourses = recentChapters
            .map(cp => cp.chapter.course)
            .filter((vc): vc is VideoCourse => Boolean(vc));

        return { recentRoutes, recentVideoCourses };
    }

    async getWeeklyGoals(user: User) {
        const startOfWeek = this.getWeekStart();

        const completedTopics = await this.prisma.userTopicProgress.count({
            where: {
                userCourse: { userId: user.id }, status: 'COMPLETED',
                finishedAt: { gte: startOfWeek },
            },
        });

        const watchedChapters = await this.prisma.chapterProgress.count({
            where: {
                userId: user.id, isCompleted: true,
                updatedAt: { gte: startOfWeek },
            },
        });

        const upcomingDeadlines = await this.prisma.userCourse.count({
            where: {
                userId: user.id,
                deadline: {
                    gte: new Date(), lt: this.addDays(new Date(), 7),
                },
            },
        });

        return { topics: { value: completedTopics, target: 5 }, videos: { value: watchedChapters, target: 4 },
            deadlines: { value: upcomingDeadlines, target: 3 },
        };
    }

    async getPopularRoutes() {
        return await this.prisma.route.findMany({
            orderBy: {
                topicMap: {
                    UserCourse: {
                        _count: 'desc',
                    },
                },
            },
            take: 6,
            include: {
                user: true,
                tags: { include: { tag: true } },
                topicMap: {
                    include: {
                        nodes: { select: { type: true, VideoCourse: true } },
                    },
                },
            },
        });
    }

    async getRecentlyAddedRoutes() {
        return await this.prisma.route.findMany({
            orderBy: { createdAt: 'desc' },
            take: 6,
            include: {
                user: true,
                tags: { include: { tag: true } },
                topicMap: {
                    include: {
                        nodes: { select: { type: true, VideoCourse: true } },
                    },
                },
            },
        });
    }

    async getPopularVideoCourses() {
        return await this.prisma.videoCourse.findMany({
            where: { isPublished: true },
            orderBy: { UserVideoCourse: { _count: 'desc' }, },
            take: 5,
            include: {
                user: true,
                topicNode: {
                    include: { topicMap: true, },
                },
            },
        });
    }

    private getWeekStart(): Date {
        const now = new Date();
        const day = now.getDay();
        const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Monday
        return new Date(now.setDate(diff));
    }

    private addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    async getWeeklyProgress(user: User) {
        const start = this.getWeekStart();

        const data = await this.prisma.userTopicProgress.findMany({
            where: {
                userCourse: { userId: user.id },
                status: 'COMPLETED',
                finishedAt: { gte: start },
            },
            select: { finishedAt: true },
        });

        const daysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const progressByDay: Record<string, number> = {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        };

        data.forEach(({ finishedAt }) => {
            const dayName = daysMap[finishedAt.getDay()];
            if (progressByDay[dayName] !== undefined) {
                progressByDay[dayName]++;
            }
        });

        return Object.entries(progressByDay).map(([date, count]) => ({
            date,
            count,
        }));
    }

    async getFavoriteRoutes(user: User) {
        const favorites = await this.prisma.favoriteRoute.findMany({
            where: { userId: user.id },
            include: {
                route: {
                    include: {
                        tags: { include: { tag: true } },
                    },
                },
            },
        });

        const tagStats: Record<string, number> = {};
        favorites.forEach(({ route }) => {
            route.tags.forEach(({ tag }) => {
                tagStats[tag.name] = (tagStats[tag.name] || 0) + 1;
            });
        });

        return Object.entries(tagStats).map(([name, favorites]) => ({
            name,
            favorites,
        }));
    }

    async getUpcomingDeadlines(user: User) {
        const now = new Date();
        const userCourses = await this.prisma.userCourse.findMany({
            where: {
                userId: user.id,
                deadline: { not: null, gte: now },
            },
            orderBy: { deadline: 'asc' },
            take: 5,
            include: {
                topicMap: {
                    include: { route: true },
                },
            },
        });

        return userCourses
            .filter(uc => uc.topicMap?.route)
            .map(uc => ({
                id: uc.topicMap.route.id,
                title: uc.topicMap.route.title,
                deadline: uc.deadline,
            }));
    }
}
