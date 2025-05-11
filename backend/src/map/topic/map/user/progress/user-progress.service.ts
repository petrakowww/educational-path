import { isProgressableType } from '@/libs/common/utils/is-progressable.util';
import { PrismaService } from '@/prisma/prisma.service';

import { CourseProgressSummary } from '../course/model/course-progress.model';
import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { NodeStatus, User } from '@prisma/__generated__';

@Injectable()
export class UserTopicProgressService {
    constructor(private readonly prisma: PrismaService) {}

    async getProgress(user: User, topicNodeId: string) {
        await this.assertProgressable(topicNodeId);

        const progress = await this.prisma.userTopicProgress.findFirst({
            where: {
                topicNodeId,
                userCourse: { userId: user.id },
            },
        });
        if (!progress)
            throw new NotFoundException('Прогресс по теме не найден');
        return progress;
    }

    async updateStatus(user: User, topicNodeId: string, status: NodeStatus) {
        const progress = await this.getProgress(user, topicNodeId);
        const now = new Date();

        const userCourse = await this.prisma.userCourse.findUnique({
            where: { id: progress.userCourseId },
            select: {
                mode: true,
                topicMapId: true,
            },
        });

        if (userCourse.mode === 'STRICT') {
            const incomingEdges = await this.prisma.topicEdge.findMany({
                where: {
                    topicMapId: userCourse.topicMapId,
                    targetId: topicNodeId,
                },
                select: { sourceId: true },
            });

            const requiredIds = incomingEdges.map(e => e.sourceId);

            if (requiredIds.length > 0) {
                const completed = await this.prisma.userTopicProgress.findMany({
                    where: {
                        topicNodeId: { in: requiredIds },
                        userCourseId: progress.userCourseId,
                        status: 'COMPLETED',
                    },
                    select: { topicNodeId: true },
                });

                const completedSet = new Set(completed.map(p => p.topicNodeId));
                const notCompleted = requiredIds.filter(
                    id => !completedSet.has(id),
                );

                if (notCompleted.length > 0) {
                    throw new ConflictException(
                        `Вы не можете завершить узел "${topicNodeId}", пока не завершены узлы: [${notCompleted.join(', ')}]`,
                    );
                }
            }
        }

        const progressValue =
            status === 'COMPLETED'
                ? 1
                : status === 'IN_PROGRESS'
                  ? 0.01
                  : 0;

        return this.prisma.userTopicProgress.update({
            where: {
                userCourseId_topicNodeId: {
                    userCourseId: progress.userCourseId,
                    topicNodeId,
                },
            },
            data: {
                status,
                progressValue,
                startedAt: ['IN_PROGRESS', 'COMPLETED'].includes(status)
                    ? (progress.startedAt ?? now)
                    : null,
                finishedAt: status === 'COMPLETED' ? now : null,
            },
        });
    }

    async updateValue(user: User, topicNodeId: string, value: number) {
        const progress = await this.getProgress(user, topicNodeId);

        if (['NOT_STARTED', 'SKIPPED'].includes(progress.status)) {
            throw new ConflictException(
                `Нельзя обновить progressValue при статусе "${progress.status}"`,
            );
        }

        const userCourse = await this.prisma.userCourse.findUnique({
            where: { id: progress.userCourseId },
            select: {
                mode: true,
                topicMapId: true,
            },
        });

        if (userCourse.mode === 'STRICT') {
            const incomingEdges = await this.prisma.topicEdge.findMany({
                where: {
                    topicMapId: userCourse.topicMapId,
                    targetId: topicNodeId,
                },
                select: { sourceId: true },
            });

            const requiredIds = incomingEdges.map(e => e.sourceId);

            if (requiredIds.length > 0) {
                const completed = await this.prisma.userTopicProgress.findMany({
                    where: {
                        topicNodeId: { in: requiredIds },
                        userCourseId: progress.userCourseId,
                        status: 'COMPLETED',
                    },
                    select: { topicNodeId: true },
                });

                const completedSet = new Set(completed.map(p => p.topicNodeId));
                const notCompleted = requiredIds.filter(
                    id => !completedSet.has(id),
                );

                if (notCompleted.length > 0) {
                    throw new ConflictException(
                        `Вы не можете обновить прогресс узла "${topicNodeId}", пока не завершены узлы: [${notCompleted.join(', ')}]`,
                    );
                }
            }
        }

        const now = new Date();
        const isCompleted = value === 1.0;

        return this.prisma.userTopicProgress.update({
            where: {
                userCourseId_topicNodeId: {
                    userCourseId: progress.userCourseId,
                    topicNodeId,
                },
            },
            data: {
                progressValue: value,
                status: isCompleted ? 'COMPLETED' : 'IN_PROGRESS',
                startedAt: progress.startedAt ?? now,
                finishedAt: isCompleted ? now : null,
            },
        });
    }

    async getCourseProgress(
        user: User,
        topicMapId: string,
    ): Promise<CourseProgressSummary> {
        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMapId,
            },
            include: {
                progress: true,
            },
        });

        if (!userCourse) {
            throw new NotFoundException('Курс не найден');
        }

        const summary = {
            completed: 0,
            inProgress: 0,
            notStarted: 0,
            skipped: 0,
            total: 0,
        };

        for (const p of userCourse.progress) {
            const node = await this.prisma.topicNode.findUnique({
                where: { id: p.topicNodeId },
                select: { type: true },
            });
            if (!node || !isProgressableType(node.type)) continue;

            summary.total++;
            switch (p.status) {
                case 'COMPLETED':
                    summary.completed++;
                    break;
                case 'IN_PROGRESS':
                    summary.inProgress++;
                    break;
                case 'SKIPPED':
                    summary.skipped++;
                    break;
                case 'NOT_STARTED':
                    summary.notStarted++;
                    break;
            }
        }

        return summary;
    }

    private async assertProgressable(topicNodeId: string) {
        const node = await this.prisma.topicNode.findUnique({
            where: { id: topicNodeId },
            select: { type: true },
        });

        if (!node || !isProgressableType(node.type)) {
            throw new ConflictException(
                `Прогресс недоступен для типа узла "${node?.type}"`,
            );
        }
    }
}
