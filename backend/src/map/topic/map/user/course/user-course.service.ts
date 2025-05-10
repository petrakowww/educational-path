import { PrismaService } from '@/prisma/prisma.service';

import { UserChecklistItemService } from '../checklist/user-checklist.service';
import { UserTopicProgressService } from '../progress/user-progress.service';
import { StartCourseInput } from './dto/start-course.dto';
import { CourseProgressSummary } from './model/course-progress.model';
import {
    ConflictException,
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { NodeStatus, User } from '@prisma/__generated__';
import { UpdateCourseSettingsInput } from './dto/update-course-settings.dto';

@Injectable()
export class UserCourseService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userTopicProgressService: UserTopicProgressService,
        private readonly userChecklistItemService: UserChecklistItemService,
    ) {}

    async startCourse(user: User, input: StartCourseInput) {
        const { topicMapId } = input;

        const topicMap = await this.prisma.topicMap.findUnique({
            where: { id: topicMapId },
            include: { nodes: true },
        });

        if (!topicMap) {
            throw new NotFoundException(`TopicMap "${topicMapId}" не найдена`);
        }

        const existing = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMapId,
            },
        });

        if (existing) {
            throw new ConflictException('Курс уже добавлен к прохождению');
        }

        const userCourse = await this.prisma.userCourse.create({
            data: {
                userId: user.id,
                topicMapId,
                progress: {
                    create: topicMap.nodes.map(node => ({
                        topicNodeId: node.id,
                    })),
                },
            },
            include: {
                progress: true,
                topicMap: true,
            },
        });

        return userCourse;
    }

    async removeCourse(user: User, topicMapId: string): Promise<boolean> {
        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                topicMapId,
                userId: user.id,
            },
        });

        if (!userCourse) {
            throw new NotFoundException('Курс не найден');
        }

        await this.prisma.userCourse.delete({
            where: { id: userCourse.id },
        });

        return true;
    }

    async getUserCourse(user: User, topicMapId: string) {
        const course = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMapId,
            },
            include: {
                progress: true,
                topicMap: {
                    include: { nodes: true, edges: true, route: true,  },
                },
                UserChecklistProgress: true,
            },
        });

        if (!course) {
            throw new NotFoundException('Курс не найден');
        }

        return course;
    }

    async toggleChecklistItem(user: User, checklistItemId: string) {
        const checklistItem = await this.prisma.checklistItem.findUnique({
            where: { id: checklistItemId },
            include: {
                topicNode: {
                    include: {
                        checklist: true,
                        topicMap: {
                            select: { id: true },
                        },
                    },
                },
            },
        });

        if (!checklistItem) {
            throw new NotFoundException('Чеклист-пункт не найден');
        }

        const topicMapId = checklistItem.topicNode.topicMap.id;
        const topicNodeId = checklistItem.topicNode.id;

        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMapId,
            },
        });

        if (!userCourse) {
            throw new ForbiddenException('Вы не проходите этот маршрут');
        }

        const userCourseId = userCourse.id;

        const existingProgress =
            await this.prisma.userChecklistProgress.findUnique({
                where: {
                    userCourseId_checklistItemId: {
                        userCourseId,
                        checklistItemId,
                    },
                },
            });

        let updatedItem;

        if (existingProgress) {
            updatedItem = await this.prisma.userChecklistProgress.update({
                where: { id: existingProgress.id },
                data: { done: !existingProgress.done },
            });
        } else {
            updatedItem = await this.prisma.userChecklistProgress.create({
                data: {
                    userCourseId,
                    checklistItemId,
                    done: true,
                },
            });
        }

        const checklistItems = checklistItem.topicNode.checklist.map(c => c.id);

        const userChecklistStates =
            await this.prisma.userChecklistProgress.findMany({
                where: {
                    userCourseId,
                    checklistItemId: { in: checklistItems },
                },
            });

        const completedCount = userChecklistStates.filter(c => c.done).length;
        const totalCount = checklistItems.length;

        let newStatus: NodeStatus;

        if (completedCount === 0) {
            newStatus = NodeStatus.NOT_STARTED;
        } else if (completedCount < totalCount) {
            newStatus = NodeStatus.IN_PROGRESS;
        } else {
            newStatus = NodeStatus.COMPLETED;
        }

        await this.prisma.userTopicProgress.updateMany({
            where: {
                userCourseId,
                topicNodeId,
            },
            data: {
                status: newStatus,
            },
        });

        return updatedItem;
    }

    async setChecklistItemDone(
        user: User,
        checklistItemId: string,
        done: boolean,
    ) {
        return this.userChecklistItemService.toggleItemDone(
            user,
            checklistItemId,
            done,
        );
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
            total: userCourse.progress.length,
        };

        for (const p of userCourse.progress) {
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

    async setNodeStatus(
        user: User,
        topicNodeId: string,
        status: NodeStatus,
    ): Promise<boolean> {
        await this.userTopicProgressService.updateStatus(
            user,
            topicNodeId,
            status,
        );
        return true;
    }

    async updateProgressValue(
        user: User,
        topicNodeId: string,
        value: number,
    ): Promise<boolean> {
        await this.userTopicProgressService.updateValue(
            user,
            topicNodeId,
            value,
        );
        return true;
    }

    async updateSettings(
        user: User,
        input: UpdateCourseSettingsInput
      ): Promise<boolean> {
        const { topicMapId, view, mode } = input;
      
        const course = await this.prisma.userCourse.findFirst({
          where: { userId: user.id, topicMapId },
        });
      
        if (!course) {
          throw new NotFoundException('Курс не найден');
        }
      
        await this.prisma.userCourse.update({
          where: { id: course.id },
          data: {
            ...(view && { view }),
            ...(mode && { mode }),
          },
        });
      
        return true;
      }
      
}
