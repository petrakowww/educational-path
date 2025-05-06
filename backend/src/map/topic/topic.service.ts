import { PrismaService } from '@/prisma/prisma.service';

import { TopicContentService } from './content/topic-content.service';
import { SaveTopicMapDto } from './dto/save-topic-map.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class TopicMapService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly topicContentService: TopicContentService,
    ) {}

    async findById(id: string) {
        return this.prismaService.topicMap.findUnique({ where: { id } });
    }

    async findTopicMap(routeId: string) {
        return this.prismaService.topicMap.findUnique({ where: { routeId } });
    }

    async save(userId: string, data: SaveTopicMapDto) {
        const route = await this.prismaService.route.findUnique({
            where: { id: data.routeId },
        });
    
        if (!route || route.userId !== userId) {
            throw new UnauthorizedException('Вы не являетесь создателем данного маршрута');
        }
    
        return await this.prismaService.$transaction(async prisma => {
            const existing = await prisma.topicMap.findUnique({
                where: { routeId: data.routeId },
            });
    
            const topicMap = existing
                ? await prisma.topicMap.update({
                      where: { routeId: data.routeId },
                      data: {
                          nodeData: data.nodeData,
                          edgeData: data.edgeData,
                      },
                  })
                : await prisma.topicMap.create({
                      data: {
                          routeId: data.routeId,
                          nodeData: data.nodeData,
                          edgeData: data.edgeData,
                      },
                  });
    
            await this.topicContentService.syncContentsTransactional(
                prisma,
                data.routeId,
                data.contents,
            );
    
            return topicMap;
        });
    }
    

    async delete(id: string) {
        await this.prismaService.topicMap.delete({ where: { id } });
        return true;
    }
}
