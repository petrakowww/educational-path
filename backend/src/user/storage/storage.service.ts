import { promises as fs } from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageAvatarsService {
    private avatarsDirectory: string;

    constructor() {
        this.avatarsDirectory = path.resolve(
            process.cwd(),
            'src/public/avatars',
        );
        this.createAvatarsDirectory().catch(error => {
            console.error(
                'Ошибка при создании директории для аватаров:',
                error,
            );
        });
    }

    private async createAvatarsDirectory() {
        try {
            await fs.mkdir(this.avatarsDirectory, { recursive: true });
        } catch (error) {
            console.error(
                'Ошибка при создании директории для аватаров:',
                error,
            );
        }
    }

    public async saveAvatar(
        imageBuffer: Buffer,
        userId: string,
    ): Promise<string> {
        const fileName = `${userId}-${uuidv4()}`;
        const filePath = path.join(this.avatarsDirectory, fileName);

        try {
            const image = sharp(imageBuffer);
            const metadata = await image.metadata();
            const fileExtension = metadata.format;

            await image
                .resize(256, 256, { fit: 'cover' })
                .toFormat(fileExtension)
                .toFile(filePath);

            return `/avatars/${fileName}.${fileExtension}`;
        } catch (error) {
            console.error(
                'Ошибка при сжатии или сохранении изображения:',
                error,
            );
            throw new Error('Не удалось сохранить изображение');
        }
    }

    public async updateAvatar(
        imageBuffer: Buffer,
        userId: string,
        currentAvatarPath?: string,
    ): Promise<string> {
        if (currentAvatarPath) {
            await this.deleteAvatar(currentAvatarPath);
        }

        return await this.saveAvatar(imageBuffer, userId);
    }

    public async deleteAvatar(filePath: string): Promise<void> {
        const fullPath = path.join(__dirname, '../../public', filePath);

        try {
            await fs.unlink(fullPath);
            console.log(`Файл ${filePath} успешно удален`);
        } catch (error) {
            console.error('Ошибка при удалении изображения:', error);
        }
    }
}
