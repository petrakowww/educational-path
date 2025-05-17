import { hash } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { UserDataProps } from './interfaces/user.interface';
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/__generated__';

@Injectable()
export class UserService {
    public constructor(private readonly prismaService: PrismaService) {}

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

    public async update(userId: string, data: Partial<User>) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: { email: true },
        });

        if (!user) {
            throw new NotFoundException('Пользователь не найден.');
        }

        if (
            data.isTwoFactorEnabled === true &&
            (!user.email || user.email.trim() === '')
        ) {
            throw new BadRequestException(
                'Невозможно включить двухфакторную аутентификацию: отсутствует адрес электронной почты.',
            );
        }

        const updatedUser = await this.prismaService.user.update({
            where: {
                id: userId,
            },
            data: {
                ...data,
            },
            include: { accounts: true, skillProfile: true },
        });

        return updatedUser;
    }

    public async delete(userId: string) {
        await this.prismaService.user.delete({
            where: {
                id: userId,
            },
        });
    }
}


