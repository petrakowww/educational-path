import { Module } from '@nestjs/common';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [TagResolver, TagService, PrismaService],
})
export class TagModule {}
