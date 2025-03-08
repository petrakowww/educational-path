import { hash } from 'argon2';

import { PrismaService } from '@/prisma/prisma.service';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserDataProps } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/__generated__';

@Injectable()
export class UserService {
    public constructor(private readonly prismaService: PrismaService) {}

    private async findUniqueUser(where: Prisma.UserWhereUniqueInput) {
        const user = await this.prismaService.user.findUnique({
            where,
            include: { accounts: true },
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
                picture: props.picture,
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

    public async update(userId: string, dto: UpdateUserDto) {
        const user = await this.findById(userId);

        const updatedUser = await this.prismaService.user.update({
            where: {
                id: user.id,
            },
            data: {
                email: dto.email,
                name: dto.name,
                isTwoFactorEnabled: dto.isTwoFactorEnabled,
            },
        });

        return updatedUser;
    }
}
