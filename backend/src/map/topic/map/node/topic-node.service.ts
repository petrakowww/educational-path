import { PrismaService } from '@/prisma/prisma.service';

import { Injectable, NotFoundException } from '@nestjs/common';
import { TopicNode } from '@prisma/__generated__';

@Injectable()
export class TopicNodeService {
    constructor(private readonly prisma: PrismaService) {}

    async getTopicNodeById(id: string): Promise<TopicNode> {
        const node = await this.prisma.topicNode.findUnique({
            where: { id },
            include: {
                checklist: true,
                topicMap: true,
                UserTopicProgress: true,
            },
        });

        if (!node) {
            throw new NotFoundException(
                `Узел темы с идентификатором "${id}" не найден`,
            );
        }

        return node;
    }
}
