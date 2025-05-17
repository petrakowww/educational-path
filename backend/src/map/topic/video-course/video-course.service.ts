import { PrismaService } from '@/prisma/prisma.service';

import { CreateVideoCourseInput } from './dto/create-course.input';
import { UpdateVideoCourseInput } from './dto/update-coure.input';
import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

@Injectable()
export class VideoCourseService {
    constructor(private prisma: PrismaService) {}

    async createCourse(userId: string, input: CreateVideoCourseInput) {
        return this.prisma.videoCourse.create({
            data: {
                title: input.title,
                description: input.description,
                imageUrl: input.imageUrl,
                userId,
                topicNodeId: input.topicNodeId,
                isPublished: false,
            },
        });
    }

    async updateCourse(userId: string, input: UpdateVideoCourseInput) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: input.id },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (course.userId !== userId) throw new ForbiddenException('Нет прав');

        return this.prisma.videoCourse.update({
            where: { id: input.id },
            data: {
                title: input.title ?? course.title,
                description: input.description ?? course.description,
                imageUrl: input.imageUrl ?? course.imageUrl,
                isPublished: input.isPublished ?? course.isPublished,
            },
        });
    }

    async deleteCourse(userId: string, courseId: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: courseId },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (course.userId !== userId) throw new ForbiddenException('Нет прав');

        // Каскадное удаление, Prisma onDelete: Cascade справится
        return this.prisma.videoCourse.delete({ where: { id: courseId } });
    }

    async publishCourse(userId: string, courseId: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: courseId },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (course.userId !== userId) throw new ForbiddenException('Нет прав');

        return this.prisma.videoCourse.update({
            where: { id: courseId },
            data: { isPublished: true },
        });
    }

    async findCourseById(userId: string, courseId: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: courseId },
            include: {
                chapters: { orderBy: { position: 'asc' } },
            },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (!course.isPublished && course.userId !== userId) {
            throw new ForbiddenException('Нет доступа к этому курсу');
        }

        return course;
    }

    async grantAccessToCourse(userId: string, videoCourseId: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: videoCourseId },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (!course.isPublished)
            throw new ForbiddenException('Курс не опубликован');

        const exists = await this.prisma.courseAccess.findUnique({
            where: {
                userId_videoCourseId: {
                    userId,
                    videoCourseId,
                },
            },
        });

        if (exists) {
            throw new ForbiddenException('Уже есть доступ к курсу');
        }

        return this.prisma.courseAccess.create({
            data: {
                userId,
                videoCourseId,
                isOwner: false,
                purchasedAt: new Date(),
            },
        });
    }

    async findAllPublished() {
        return this.prisma.videoCourse.findMany({
            where: { isPublished: true },
            include: {
                chapters: { orderBy: { position: 'asc' } },
            },
        });
    }

    async findCoursesByTopicNode(userId: string | null, topicNodeId: string) {
        const whereClause = {
            topicNodeId,
            OR: userId
                ? [{ isPublished: true }, { userId }]
                : [{ isPublished: true }],
        };

        return this.prisma.videoCourse.findMany({
            where: whereClause,
            include: {
                chapters: { orderBy: { position: 'asc' } },
            },
        });
    }
}
