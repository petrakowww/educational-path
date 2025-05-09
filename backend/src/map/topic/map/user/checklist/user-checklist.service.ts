import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/__generated__";
import { UserTopicProgressService } from "../progress/user-progress.service";

@Injectable()
export class UserChecklistItemService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly topicProgress: UserTopicProgressService,
    ) {}

    async toggleItemDone(user: User, checklistItemId: string, done: boolean) {
        const userItem = await this.prisma.userChecklistProgress.findFirst({
            where: {
                checklistItemId,
                userCourse: { userId: user.id },
            },
            include: {
                userCourse: true,
                checklist: {
                    include: { topicNode: true },
                },
            },
        });

        if (!userItem)
            throw new NotFoundException('Прогресс по задаче не найден');

        await this.prisma.userChecklistProgress.update({
            where: {
                userCourseId_checklistItemId: {
                    userCourseId: userItem.userCourseId,
                    checklistItemId,
                },
            },
            data: { done },
        });

        const topicNodeId = userItem.checklist.topicNode.id;
        const total = await this.prisma.checklistItem.count({
            where: { topicNodeId },
        });
        const completed = await this.prisma.userChecklistProgress.count({
            where: {
                userCourseId: userItem.userCourseId,
                checklist: { topicNodeId },
                done: true,
            },
        });

        const value = total ? completed / total : 0;
        return this.topicProgress.updateStatus(
            user,
            topicNodeId,
            value === 1
                ? 'COMPLETED'
                : value > 0
                  ? 'IN_PROGRESS'
                  : 'NOT_STARTED',
        );
    }
}
