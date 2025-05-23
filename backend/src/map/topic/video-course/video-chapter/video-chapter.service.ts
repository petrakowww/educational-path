import { PrismaService } from '@/prisma/prisma.service';

import { CreateVideoChapterInput } from './dto/create-chapter.input';
import { UpdateVideoChapterInput } from './dto/update-chapter.input';
import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

@Injectable()
export class VideoChapterService {
    constructor(private prisma: PrismaService) {}

    async createChapter(userId: string, input: CreateVideoChapterInput) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: input.courseId },
        });

        if (!course) throw new NotFoundException('Курс не найден');
        if (course.userId !== userId) throw new ForbiddenException('Нет прав');

        let position = input.position;
        if (position === undefined) {
            const count = await this.prisma.videoChapter.count({
                where: { courseId: input.courseId },
            });
            position = count + 1;
        } else {
            await this.prisma.videoChapter.updateMany({
                where: {
                    courseId: input.courseId,
                    position: { gte: position },
                },
                data: { position: { increment: 1 } },
            });
        }

        return this.prisma.videoChapter.create({
            data: {
                courseId: input.courseId,
                title: input.title,
                description: input.description,
                videoUrl: input.videoUrl,
                position,
                isPublished: false,
            },
        });
    }

    async updateChapter(userId: string, input: UpdateVideoChapterInput) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: input.id },
            include: { course: true },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');
        if (chapter.course.userId !== userId)
            throw new ForbiddenException('Нет прав');

        if (
            input.position !== undefined &&
            input.position !== chapter.position
        ) {
            const oldPos = chapter.position;
            const newPos = input.position;

            if (newPos < oldPos) {
                await this.prisma.videoChapter.updateMany({
                    where: {
                        courseId: chapter.courseId,
                        position: { gte: newPos, lt: oldPos },
                    },
                    data: { position: { increment: 1 } },
                });
            } else {
                await this.prisma.videoChapter.updateMany({
                    where: {
                        courseId: chapter.courseId,
                        position: { lte: newPos, gt: oldPos },
                    },
                    data: { position: { decrement: 1 } },
                });
            }

            chapter.position = newPos;
        }

        return this.prisma.videoChapter.update({
            where: { id: chapter.id },
            data: {
                title: input.title ?? chapter.title,
                description: input.description ?? chapter.description,
                videoUrl: input.videoUrl ?? chapter.videoUrl,
                isPublished: input.isPublished ?? chapter.isPublished,
                position: chapter.position,
            },
        });
    }

    async deleteChapter(userId: string, chapterId: string) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: chapterId },
            include: { course: true },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');
        if (chapter.course.userId !== userId)
            throw new ForbiddenException('Нет прав');

        const courseId = chapter.courseId;
        const oldPos = chapter.position;

        await this.prisma.videoChapter.delete({ where: { id: chapterId } });

        await this.prisma.videoChapter.updateMany({
            where: {
                courseId,
                position: { gt: oldPos },
            },
            data: { position: { decrement: 1 } },
        });

        return true;
    }

    async publishChapter(userId: string, chapterId: string) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: chapterId },
            include: { course: true },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');
        if (chapter.course.userId !== userId)
            throw new ForbiddenException('Нет прав');

        return this.prisma.videoChapter.update({
            where: { id: chapterId },
            data: { isPublished: true },
        });
    }

    async unpublishChapter(userId: string, chapterId: string) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: chapterId },
            include: { course: true },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');
        if (chapter.course.userId !== userId)
            throw new ForbiddenException('Нет прав');

        return this.prisma.videoChapter.update({
            where: { id: chapterId },
            data: { isPublished: false },
        });
    }

    async completeChapter(userId: string, chapterId: string) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: chapterId },
            include: { course: true },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');

        if (!chapter.course.isPublished || !chapter.isPublished) {
            throw new ForbiddenException('Глава не опубликована');
        }

        return this.prisma.chapterProgress.upsert({
            where: { userId_chapterId: { userId, chapterId } },
            update: { isCompleted: true },
            create: {
                userId,
                chapterId,
                isCompleted: true,
            },
        });
    }

    async getAvailableChaptersForUser(userId: string, courseId: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: courseId },
            include: {
                chapters: {
                    orderBy: { position: 'asc' },
                },
            },
        });

        if (!course) throw new NotFoundException('Курс не найден');

        return course.chapters.filter(chapter => chapter.isPublished);
    }

    async getChapterById(userId: string, chapterId: string) {
        const chapter = await this.prisma.videoChapter.findUnique({
            where: { id: chapterId },
            include: {
                course: true,
                progress: true,
            },
        });

        if (!chapter) throw new NotFoundException('Глава не найдена');

        if (!chapter.isPublished && chapter.course.userId !== userId) {
            throw new ForbiddenException('Глава не опубликована');
        }

        return chapter;
    }
}
