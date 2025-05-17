import { Module } from '@nestjs/common';
import { VideoChapterService } from './video-chapter.service';
import { VideoChapterResolver } from './video-chapter.resolver';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [VideoChapterService, VideoChapterResolver, JwtService, RedisService],
})
export class VideoChapterModule {}
