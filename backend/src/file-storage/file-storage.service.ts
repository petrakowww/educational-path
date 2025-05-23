import * as fs from 'fs';
import * as path from 'path';

import { Injectable } from '@nestjs/common';

export type FileType = 'image' | 'video' | 'attachments';

@Injectable()
export class FileStorageService {
    private readonly rootDir = path.resolve(process.cwd(), 'public'); // not 'src/public'

    private readonly subfolders: Record<FileType, string> = {
        image: 'images/courses',
        video: 'videos/courses',
        attachments: 'attachments',
    };

    private getStoragePath(type: FileType, courseId: string): string {
        const subfolder = this.subfolders[type];
        return path.join(this.rootDir, subfolder, courseId);
    }

    public saveFile(
        type: FileType,
        courseId: string,
        filename: string,
        buffer: Buffer,
    ): string {
        const dir = this.getStoragePath(type, courseId);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        const filePath = path.join(dir, filename);
        fs.writeFileSync(filePath, buffer);
        return `/${this.subfolders[type]}/${courseId}/${filename}`;
    }

    public deleteFile(type: FileType, courseId: string, filename: string) {
    const filePath = path.join(this.getStoragePath(type, courseId), filename);
    console.log('[DELETE FILE] Trying to delete:', filePath);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log('[DELETE FILE] File deleted');
    } else {
        console.warn('[DELETE FILE] File does not exist:', filePath);
    }
}
}
