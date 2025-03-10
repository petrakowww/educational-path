import { hash } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { UserDataProps } from './interfaces/user.interface';
import { StorageAvatarsService } from './storage/storage-avatar.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/__generated__';

@Injectable()
export class UserService {
    private readonly storageAvatarsService: StorageAvatarsService;
    public constructor(private readonly prismaService: PrismaService) {
        this.storageAvatarsService = new StorageAvatarsService();
    }

    private async findUniqueUser(where: Prisma.UserWhereUniqueInput) {
        const user = await this.prismaService.user.findUnique({
            where,
            include: { accounts: true, skillProfile: true },
        });
        return user;
    }

    public async findById(id: string) {
        const user = await this.findUniqueUser({ id });

        return user;
    }

    public async findByEmail(email: string) {
        const user = await this.findUniqueUser({ email: email });

        return user;
    }

    public async create(props: UserDataProps) {
        const user = await this.prismaService.user.create({
            data: {
                email: props.email,
                password: props.password ? await hash(props.password) : '',
                name: props.name,
                avatar: props.avatar,
                isVerified: props.isVerified,
                method: props.method,
                skillProfile: {
                    create: {
                        githubUrl: props.github_url || '',
                    },
                },
            },
            include: {
                accounts: true,
                skillProfile: true,
            },
        });

        return user;
    }

    public async updateAvatar(userId: string, file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Файл аватара не был загружен');
        }

        const currentUser = await this.findById(userId);
        
        const updatedAvatarPath = await this.storageAvatarsService.updateAvatar(
            file.buffer,
            userId,
            currentUser.avatar,
        );

        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: { avatar: updatedAvatarPath },
        });

        return updatedUser;
    }

    public async deleteAvatar(userId: string) {
        const currentUser = await this.findById(userId);
        if (!currentUser.avatar) {
            throw new BadRequestException('Аватар не был найден');
        }

        await this.storageAvatarsService.deleteAvatar(currentUser.avatar);

        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: { avatar: null },
        });

        return updatedUser;
    }
}
