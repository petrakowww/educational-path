import { PrismaService } from '@/prisma/prisma.service';

import { UserTopicProgressService } from '../progress/user-progress.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/__generated__';

@Injectable()
export class ChecklistItemService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly topicProgress: UserTopicProgressService,
    ) {}

    async getChecklistItemDone(
        user: User,
        checklistItemId: string,
    ): Promise<boolean> {
        const checklistItem = await this.prisma.checklistItem.findUnique({
            where: { id: checklistItemId },
        });

        if (!checklistItem) return false;

        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMap: {
                    nodes: { some: { id: checklistItem.topicNodeId } },
                },
            },
        });

        if (!userCourse) return false;

        const progress = await this.prisma.userChecklistProgress.findUnique({
            where: {
                userCourseId_checklistItemId: {
                    userCourseId: userCourse.id,
                    checklistItemId,
                },
            },
        });

        return progress?.done ?? false;
    }

    async markChecklistItem(user: User, checklistItemId: string, done: boolean) {
        const checklistItem = await this.prisma.checklistItem.findUnique({
            where: { id: checklistItemId },
            include: {
                topicNode: {
                    select: { topicMapId: true },
                },
            },
        });
    
        if (!checklistItem) {
            throw new NotFoundException('Чеклист-пункт не найден');
        }
    
        const topicMapId = checklistItem.topicNode.topicMapId;
    
        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMapId,
            },
        });
    
        if (!userCourse) {
            throw new NotFoundException('Вы не проходите этот маршрут');
        }
    
        const existingProgress = await this.prisma.userChecklistProgress.findUnique({
            where: {
                userCourseId_checklistItemId: {
                    userCourseId: userCourse.id,
                    checklistItemId,
                },
            },
        });
    
        let userChecklistProgressId: string;
    
        if (existingProgress) {
            const updated = await this.prisma.userChecklistProgress.update({
                where: { id: existingProgress.id },
                data: { done },
            });
            userChecklistProgressId = updated.id;
        } else {
            const created = await this.prisma.userChecklistProgress.create({
                data: {
                    userCourseId: userCourse.id,
                    checklistItemId,
                    done,
                },
            });
            userChecklistProgressId = created.id;
        }
    
        const topicNodeId = checklistItem.topicNodeId;
    
        const total = await this.prisma.checklistItem.count({
            where: { topicNodeId },
        });
    
        const completed = await this.prisma.userChecklistProgress.count({
            where: {
                userCourseId: userCourse.id,
                checklist: { topicNodeId },
                done: true,
            },
        });
    
        const value = total ? completed / total : 0;
    
        await this.topicProgress.updateStatus(
            user,
            topicNodeId,
            value === 1 ? 'COMPLETED' : value > 0 ? 'IN_PROGRESS' : 'NOT_STARTED',
        );
    
        return this.prisma.userChecklistProgress.findUnique({
            where: { id: userChecklistProgressId },
            include: {
                checklist: true,
                userCourse: true,
            },
        });
    }
    

    async getChecklistProgressByTopic(user: User, topicNodeId: string) {
        const checklistItems = await this.prisma.checklistItem.findMany({
            where: { topicNodeId },
            orderBy: { id: 'asc' },
        });
    
        if (!checklistItems.length) return [];
    
        const userCourse = await this.prisma.userCourse.findFirst({
            where: {
                userId: user.id,
                topicMap: {
                    nodes: { some: { id: topicNodeId } },
                },
            },
        });
    
        if (!userCourse) {
            return checklistItems.map((item) => ({
                id: item.id,
                text: item.text,
                done: false,
            }));
        }
    
        const progressList = await this.prisma.userChecklistProgress.findMany({
            where: {
                userCourseId: userCourse.id,
                checklistItemId: { in: checklistItems.map((c) => c.id) },
            },
        });
    
        const progressMap = new Map(
            progressList.map((p) => [p.checklistItemId, p.done])
        );
    
        return checklistItems.map((item) => ({
            id: item.id,
            text: item.text,
            done: progressMap.get(item.id) ?? false,
        }));
    }
    
}
