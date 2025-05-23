// upload.controller.ts
import { randomUUID } from 'crypto';
import * as iconv from 'iconv-lite';
import * as path from 'path';

import { Authorization } from '@/auth/decorators/auth.decorator';
import {
    FileStorageService,
    FileType,
} from '@/file-storage/file-storage.service';

import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

const ENDPOINTS: Record<string, FileType> = {
    courseImage: 'image',
    courseVideo: 'video',
    courseAttachment: 'attachments',
};

@Controller('upload')
export class UploadController {
    constructor(private readonly fileStorageService: FileStorageService) {}

    private parseFileType(endpoint: string): FileType {
        const type = ENDPOINTS[endpoint];
        if (!type) throw new BadRequestException('Некорректная точка выхода');
        return type;
    }

    private parseFromUrl(url: string): {
        type: FileType;
        courseId: string;
        filename: string;
    } {
        const match = url.match(
            /^\/(images\/courses|videos\/courses|attachments)\/([^/]+)\/(.+)$/,
        );

        if (!match) throw new BadRequestException('Неверный формат пути');

        const [, folder, courseId, filename] = match;

        const type =
            folder === 'images/courses'
                ? 'image'
                : folder === 'videos/courses'
                  ? 'video'
                  : folder === 'attachments'
                    ? 'attachments'
                    : null;

        if (!type || !filename || !courseId) {
            throw new BadRequestException('Ошибка разбора пути');
        }

        return { type, courseId, filename };
    }

    @Authorization()
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('endpoint') endpoint: string,
        @Body('courseId') courseId: string,
    ) {
        if (!file || !endpoint || !courseId)
            throw new BadRequestException('Данные не переданы');

        const type = this.parseFileType(endpoint);
        const ext = path.extname(file.originalname);
        const filename = `${randomUUID()}${ext}`;

        const publicUrl = this.fileStorageService.saveFile(
            type,
            courseId,
            filename,
            file.buffer,
        );

        const decodedOriginalName = iconv.decode(
            Buffer.from(file.originalname, 'binary'),
            'utf-8',
        );

        return {
            url: publicUrl,
            originalFilename: decodedOriginalName,
        };
    }

    @Authorization()
    @Delete()
    deleteFile(@Query('url') url: string) {
        const { type, courseId, filename } = this.parseFromUrl(url);
        this.fileStorageService.deleteFile(type, courseId, filename);
        return { success: true };
    }

    @Authorization()
    @Patch()
    @UseInterceptors(FileInterceptor('file'))
    updateFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('endpoint') endpoint: string,
        @Body('courseId') courseId: string,
        @Body('previousUrl') previousUrl?: string,
    ) {
        if (previousUrl) {
            const { type, courseId, filename } = this.parseFromUrl(previousUrl);
            this.fileStorageService.deleteFile(type, courseId, filename);
        }

        const type = this.parseFileType(endpoint);
        const ext = path.extname(file.originalname);
        const filename = `${randomUUID()}${ext}`;

        const publicUrl = this.fileStorageService.saveFile(
            type,
            courseId,
            filename,
            file.buffer,
        );

        return {
            url: publicUrl,
            originalFilename: file.originalname,
        };
    }
}
