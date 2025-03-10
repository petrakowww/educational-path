import { hash } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { UpdateExternalUserDto } from './dto/update-user.dto';
import { UserDataProps } from './interfaces/user.interface';
import { StorageAvatarsService } from './storage/storage.service';
import { Injectable } from '@nestjs/common';
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

    public async updateExternalUser(
        userId: string,
        dto: UpdateExternalUserDto,
    ) {
        const user = await this.findById(userId);

        let updatedAvatarPath = user.avatar;
        if (dto.avatar) {
            updatedAvatarPath = await this.storageAvatarsService.updateAvatar(
                Buffer.from(dto.avatar, 'base64'),
                userId,
                user.avatar,
            );
        }

        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                name: dto.name,
                avatar: updatedAvatarPath,
            },
        });

        return updatedUser;
    }
}
