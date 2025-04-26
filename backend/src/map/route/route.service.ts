import { PrismaService } from '@/prisma/prisma.service';

import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Route } from '@prisma/__generated__';

@Injectable()
export class RouteService {
    constructor(private readonly prismaService: PrismaService) {}

    public async findById(id: string): Promise<Route | null> {
        return this.prismaService.route.findUnique({
            where: { id },
            include: {
                topicNodes: true,
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });
    }

    public async findByUserId(userId: string): Promise<Route[]> {
        return this.prismaService.route.findMany({
            where: { userId },
            include: {
                topicNodes: true,
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    public async create(userId: string, data: CreateRouteDto): Promise<Route> {
        const userExists = await this.prismaService.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new ForbiddenException('Такого пользователя не существует');
        }

        return this.prismaService.route.create({
            data: {
                title: data.title,
                description: data.description,
                userId: userExists.id,
                tags: {
                    create:
                        data.tagIds?.map(tagId => ({
                            tag: { connect: { id: tagId } },
                        })) ?? [],
                },
            },
        });
    }

    public async update(
        id: string,
        userId: string,
        data: UpdateRouteDto,
    ): Promise<Route> {
        const route = await this.prismaService.route.findUnique({
            where: { id },
        });
        if (!route || route.userId !== userId) {
            throw new UnauthorizedException('Вы не являетесь создателем данного маршрута');
        }

        return this.prismaService.$transaction(async tx => {
            if (data.tagIds) {
                await tx.routeTag.deleteMany({
                  where: {
                    routeId: id,
                  },
                });
              }

            return tx.route.update({
                where: { id },
                data: {
                    title: data.title,
                    description: data.description,
                    privateType: data.privateType,
                    tags: {
                        create:
                            data.tagIds?.map(tagId => ({
                                tag: { connect: { id: tagId } },
                            })) ?? [],
                    },
                },
                include: {
                    tags: {
                        include: {
                          tag: true,
                        },
                      },
                },
            });
        });
    }

    public async delete(id: string, userId: string): Promise<boolean> {
        const route = await this.prismaService.route.findUnique({
            where: { id },
        });
        if (!route || route.userId !== userId) {
            throw new UnauthorizedException('Вы не являетесь создателем данного маршрута');
        }

        try {
            await this.prismaService.route.delete({
                where: { id },
            });
            return true;
        } catch {
            return false;
        }
    }
}
