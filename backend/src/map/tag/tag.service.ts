import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async getAllTags() {
    return this.prisma.tag.findMany();
  }

  async getUserTags(userId: string) {
    return this.prisma.tag.findMany({
      where: {
        routes: {
          some: {
            route: {
              userId: userId,
            },
          },
        },
      },
    });
  }
  
}
