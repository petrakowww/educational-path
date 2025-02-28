import { hash } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { UserDataProps } from './interfaces/user.interface';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
    public constructor(private readonly prismaService: PrismaService) {}

    public async findById(id: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id,
            },
            include: {
                accounts: true,
            },
        });

        if (!user) {
            throw new NotFoundException(
                'The user was not found, please check the entered data.',
            );
        }

        return user;
    }

    public async findByEmail(email: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
            },
            include: {
                accounts: true,
            },
        });

        return user;
    }

    public async create(props: UserDataProps) {
        const user = await this.prismaService.user.create({
            data: {
                email: props.email,
                password: props.password ? await hash(props.password) : '',
                displayName: props.displayName,
                picture: props.picture,
                isVerified: props.isVerified,
                method: props.method,
            },
            include: {
                accounts: true,
            },
        });

        return user;
    }
}
