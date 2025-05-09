import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { User, NodeStatus } from "@prisma/__generated__";

@Injectable()
export class UserTopicProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async getProgress(user: User, topicNodeId: string) {
    const progress = await this.prisma.userTopicProgress.findFirst({
      where: {
        topicNodeId,
        userCourse: { userId: user.id },
      },
    });
    if (!progress) throw new NotFoundException('Прогресс по теме не найден');
    return progress;
  }

  async updateStatus(user: User, topicNodeId: string, status: NodeStatus) {
    const progress = await this.getProgress(user, topicNodeId);
    const now = new Date();

    const progressValue = status === 'COMPLETED' ? 1 :
                          status === 'IN_PROGRESS' ? progress.progressValue ?? 0.01 : 0;

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
          ? progress.startedAt ?? now
          : null,
        finishedAt: status === 'COMPLETED' ? now : null,
      },
    });
  }

  async updateValue(user: User, topicNodeId: string, value: number) {
    const progress = await this.getProgress(user, topicNodeId);
    if (['NOT_STARTED', 'SKIPPED'].includes(progress.status)) {
      throw new ConflictException(`Нельзя обновить progressValue при статусе "${progress.status}"`);
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
}
