import { promises as fs } from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

import {
    BadRequestException,
    Injectable,
} from '@nestjs/common';

interface FSError extends Error {
    code?: string;
}

@Injectable()
export class AvatarStorageService {
    private avatarsDirectory: string;

    constructor() {
        this.avatarsDirectory = path.resolve(
            process.cwd(),
            'public/avatars',
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
            throw new BadRequestException(
                'Не удалось создать директорию для аватаров',
            );
        }
    }

    private getFullAvatarPath(filePath: string): string {
        return path.join(process.cwd(), 'public', filePath);
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
                .toFile(`${filePath}.${fileExtension}`);

            return `/avatars/${fileName}.${fileExtension}`;
        } catch (error) {
            console.error(
                'Ошибка при сжатии или сохранении изображения:',
                error,
            );
            throw new BadRequestException('Не удалось сохранить изображение');
        }
    }

    public async updateAvatar(
        imageBuffer: Buffer,
        userId: string,
        currentAvatarPath?: string,
    ): Promise<string> {
        
        if (currentAvatarPath) {
            
            const fullPath = this.getFullAvatarPath(currentAvatarPath);
            const exists = await this.checkIfFileExists(fullPath);

            if (exists) {
                await this.deleteAvatar(currentAvatarPath);
            } else {
                console.log(
                    'Предыдущее изображение не найдено, обновляем только новое',
                );
            }
        }
        return await this.saveAvatar(imageBuffer, userId);
    }

    private async checkIfFileExists(filePath: string): Promise<boolean> {
        try {
            await fs.access(filePath);
            return true;
        } catch {
            return false;
        }
    }

    public async deleteAvatar(filePath: string): Promise<void> {
        const fullPath = this.getFullAvatarPath(filePath);

        try {
            await fs.access(fullPath);
            await fs.unlink(fullPath);
            console.log(`Файл ${filePath} успешно удален`);
        } catch (error) {
            const fsError = error as FSError;

            if (fsError.code === 'ENOENT') {
                console.log(`Файл ${filePath} не найден, пропускаем удаление.`);
                return;
            }
            if (fsError.code === 'EACCES') {
                console.error('Нет прав на удаление файла:', fsError);
                throw new BadRequestException('Нет прав для удаления файла');
            }

            console.error('Ошибка при удалении изображения:', fsError);
            throw new BadRequestException('Не удалось удалить изображение');
        }
    }
}
