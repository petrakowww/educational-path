import { PrismaService } from '@/prisma/prisma.service';

import { StartCourseInput } from './dto/start-course.dto';
import { UpdateCourseSettingsInput } from './dto/update-course-settings.dto';
import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/__generated__';
import { isProgressableType } from '@/libs/common/utils/is-progressable.util';

@Injectable()
export class UserCourseService {
    constructor(
        private readonly prisma: PrismaService,
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
                    create: topicMap.nodes
                        .filter((node) => isProgressableType(node.type))
                        .map((node) => ({
                            topicNodeId: node.id,
                        })),
                }
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
                    include: { nodes: true, edges: true, route: true },
                },
                UserChecklistProgress: true,
            },
        });

        if (!course) {
            throw new NotFoundException('Курс не найден');
        }

        return course;
    }

    async updateSettings(
        user: User,
        input: UpdateCourseSettingsInput,
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
