import { PrismaService } from '@/prisma/prisma.service';

import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/__generated__';
import { AvatarStorageService } from './avatar.storage';


@Injectable()
export class AvatarService {
    private readonly storageAvatarsService: AvatarStorageService;

    public constructor(private readonly prismaService: PrismaService) {
        this.storageAvatarsService = new AvatarStorageService();
    }

    public async updateAvatar(user: User, file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Файл аватара не был загружен');
        }

        const updatedAvatarPath = await this.storageAvatarsService.updateAvatar(
            file.buffer,
            user.id,
            user.avatar,
        );

        return this.prismaService.user.update({
            where: { id: user.id },
            data: { avatar: updatedAvatarPath },
        });
    }

    public async deleteAvatar(user: User) {
        if (!user.avatar) {
            throw new BadRequestException('Аватар не был найден');
        }

        await this.storageAvatarsService.deleteAvatar(user.avatar);

        return this.prismaService.user.update({
            where: { id: user.id },
            data: { avatar: null },
        });
    }
}
