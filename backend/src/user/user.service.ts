import { hash, verify } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { ChangePasswordDto } from './dto/user-password.dto';
import { UserDataProps } from './interfaces/user.interface';
import { StorageAvatarsService } from './storage/storage-avatar.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/__generated__';

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
                        githubUrl: props.githubUrl || '',
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

    public async updateAvatar(user: User, file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Файл аватара не был загружен');
        }

        const updatedAvatarPath = await this.storageAvatarsService.updateAvatar(
            file.buffer,
            user.id,
            user.avatar,
        );

        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: { avatar: updatedAvatarPath },
        });

        return updatedUser;
    }

    public async deleteAvatar(user: User) {
        if (!user.avatar) {
            throw new BadRequestException('Аватар не был найден');
        }

        await this.storageAvatarsService.deleteAvatar(user.avatar);

        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: { avatar: null },
        });

        return updatedUser;
    }

    public async updateUser(user: User, data: Partial<User>) {
        if (data.password) {
            data.password = await hash(data.password);
        }

        const updatedUser = await this.prismaService.user.update({
            where: {
                id: user.id,
            },
            data: {
                ...data,
            },
            include: { accounts: true, skillProfile: true },
        });

        return updatedUser;
    }

    public async updatePassword(user: User, dto: ChangePasswordDto) {
        if (user.password) {
            if (!dto.oldPassword) {
                throw new BadRequestException('Введите старый пароль.');
            }

            try {
                const isMatch = await verify(user.password, dto.oldPassword);
                if (!isMatch) {
                    throw new BadRequestException('Неверный старый пароль.');
                }
            } catch {
                throw new BadRequestException('Ошибка при проверке пароля.');
            }
        } else {
            if (dto.oldPassword) {
                throw new BadRequestException('У вас нет старого пароля.');
            }
        }

        if (dto.oldPassword === dto.newPassword) {
            throw new BadRequestException(
                'Новый пароль не может совпадать со старым.',
            );
        }

        try {
            const hashedPassword = await hash(dto.newPassword);

            const updateUser = await this.prismaService.user.update({
                where: { id: user.id },
                data: { password: hashedPassword },
            });

            return { ...updateUser, message: 'Пароль успешно изменён' };
        } catch {
            throw new BadRequestException('Ошибка при обновлении пароля.');
        }
    }
}
