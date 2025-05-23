// file-uploader/video-chapter-uploader.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { FileStorageService } from '@/file-storage/file-storage.service';

@Injectable()
export class VideoChapterUploaderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileStorage: FileStorageService,
  ) {}

  async updateChapterVideo(userId: string, chapterId: string, newUrl: string) {
    const chapter = await this.prisma.videoChapter.findFirst({
      where: {
        id: chapterId,
        course: {
          userId: userId,
        },
      },
    });

    if (!chapter) {
      throw new NotFoundException('Глава не найдена или нет доступа');
    }

    if (chapter.videoUrl) {
      const filePath = chapter.videoUrl.split('/public/')[1];
      const [folder, courseId, ...rest] = filePath.split('/');
      const filename = rest.join('/');
      this.fileStorage.deleteFile(
        folder as 'video',
        courseId,
        filename,
      );
    }

    return this.prisma.videoChapter.update({
      where: { id: chapterId },
      data: { videoUrl: newUrl },
    });
  }
}
