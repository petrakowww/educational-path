import { FileStorageService } from '@/file-storage/file-storage.service';
import { PrismaService } from '@/prisma/prisma.service';

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ImageUploaderService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly fileStorage: FileStorageService,
    ) {}

    async updateCourseImage(userId: string, courseId: string, newUrl: string) {
        const course = await this.prisma.videoCourse.findUnique({
            where: { id: courseId },
        });

        if (!course || course.userId !== userId) {
            throw new NotFoundException('Курс не найден или нет доступа');
        }

        if (course.imageUrl) {
            const match = course.imageUrl.match(
                /^\/(images\/courses|videos\/courses|attachments)\/([^/]+)\/(.+)$/,
            );

            if (match) {
                const [, folder, prevCourseId, filename] = match;

                const type =
                    folder === 'images/courses'
                        ? 'image'
                        : folder === 'videos/courses'
                          ? 'video'
                          : folder === 'attachments'
                            ? 'attachments'
                            : undefined;

                if (type) {
                    this.fileStorage.deleteFile(type, prevCourseId, filename);
                }
            }
        }

        return this.prisma.videoCourse.update({
            where: { id: courseId },
            data: { imageUrl: newUrl },
        });
    }
}
