import { PrismaService } from '@/prisma/prisma.service';

import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import {
    ForbiddenException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { Route, VerificationStatus } from '@prisma/__generated__';

@Injectable()
export class RouteService {
    constructor(private readonly prisma: PrismaService) {}

    private async validateUser(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user)
            throw new ForbiddenException('Такого пользователя не существует');
        return user;
    }

    public async findById(id: string): Promise<Route | null> {
        return this.prisma.route.findUnique({
            where: { id },
            include: {
                topicMap: {
                    include: {
                        nodes: true,
                        edges: true,
                    },
                },
                tags: {
                    include: {
                        tag: true,
                    },
                },
                user: true,
            },
        });
    }

    public async findByUserId(userId: string): Promise<Route[]> {
        return this.prisma.route.findMany({
            where: { userId },
            include: {
                topicMap: {
                    include: {
                        nodes: true,
                        edges: true,
                    },
                },
                tags: {
                    include: {
                        tag: true,
                    },
                },
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    public async create(userId: string, data: CreateRouteDto): Promise<Route> {
        await this.validateUser(userId);

        return this.prisma.$transaction(async tx => {
            const route = await tx.route.create({
                data: {
                    title: data.title,
                    description: data.description,
                    userId,
                    tags: {
                        create:
                            data.tagIds?.map(tagId => ({
                                tag: { connect: { id: tagId } },
                            })) ?? [],
                    },
                },
            });

            await tx.topicMap.create({
                data: {
                    routeId: route.id,
                },
            });

            return tx.route.findUnique({
                where: { id: route.id },
                include: {
                    topicMap: true,
                    tags: { include: { tag: true } },
                },
            }) as Promise<Route>;
        });
    }

    public async update(
        id: string,
        userId: string,
        data: UpdateRouteDto,
    ): Promise<Route> {
        const route = await this.prisma.route.findUnique({ where: { id } });
        if (!route || route.userId !== userId) {
            throw new UnauthorizedException(
                'Вы не являетесь создателем данного маршрута',
            );
        }

        return this.prisma.$transaction(async tx => {
            if (data.tagIds) {
                await tx.routeTag.deleteMany({
                    where: { routeId: id },
                });

                await tx.route.update({
                    where: { id },
                    data: {
                        tags: {
                            create: data.tagIds.map(tagId => ({
                                tag: { connect: { id: tagId } },
                            })),
                        },
                    },
                });
            }

            await tx.route.update({
                where: { id },
                data: {
                    title: data.title,
                    description: data.description,
                    privateType: data.privateType,
                },
            });

            return tx.route.findUnique({
                where: { id },
                include: {
                    topicMap: true,
                    tags: { include: { tag: true } },
                },
            }) as Promise<Route>;
        });
    }

    public async delete(id: string, userId: string): Promise<boolean> {
        const route = await this.prisma.route.findUnique({
            where: { id },
            include: { topicMap: true },
        });

        if (!route || route.userId !== userId) {
            throw new UnauthorizedException(
                'Вы не являетесь создателем данного маршрута',
            );
        }

        try {
            await this.prisma.$transaction([
                this.prisma.topicMap.deleteMany({
                    where: { routeId: id },
                }),
                this.prisma.route.delete({ where: { id } }),
            ]);
            return true;
        } catch {
            return false;
        }
    }

    async verify(id: string, status: VerificationStatus): Promise<Route> {
        const route = await this.prisma.route.findUnique({ where: { id } });
        if (!route) {
            throw new NotFoundException('Маршрут не найден');
        }

        return this.prisma.route.update({
            where: { id },
            data: {
                isVerified: status,
            },
            include: {
                topicMap: true,
                tags: { include: { tag: true } },
                user: true,
            },
        });
    }
}
