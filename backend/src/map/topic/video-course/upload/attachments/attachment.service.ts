// attachment.service.ts
import { FileStorageService } from '@/file-storage/file-storage.service';
import { PrismaService } from '@/prisma/prisma.service';

import { CreateAttachmentInput } from './dto/create-attachment.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AttachmentService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly fileStorageService: FileStorageService,
    ) {}

    async createAttachment(userId: string, input: CreateAttachmentInput) {
        const course = await this.prisma.videoCourse.findFirst({
            where: {
                id: input.courseId,
                userId: userId,
            },
        });

        if (!course) {
            throw new NotFoundException(
                'Курс не найден или не принадлежит пользователю',
            );
        }

        return this.prisma.attachment.create({
            data: {
                name: input.name,
                url: input.url,
                courseId: input.courseId,
            },
        });
    }

    async deleteAttachment(userId: string, id: string) {
        const attachment = await this.prisma.attachment.findUnique({
            where: { id },
            include: { course: true },
        });

        if (!attachment || attachment.course.userId !== userId) {
            throw new NotFoundException('Вложение не найдено или нет доступа');
        }

        const pathParts = attachment.url.split('/').filter(Boolean); // убирает пустые из-за двойного //
        const [folder, courseId, ...rest] = pathParts;
        const filename = rest.join('/');

        this.fileStorageService.deleteFile(
            folder as 'attachments',
            courseId,
            filename,
        );

        await this.prisma.attachment.delete({ where: { id } });
        return true;
    }
}
