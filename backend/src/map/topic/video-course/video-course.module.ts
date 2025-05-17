import { Module } from '@nestjs/common';
import { VideoCourseService } from './video-course.service';
import { VideoCourseResolver } from './video-course.resolver';
import { PrismaModule } from '@/prisma/prisma.module';
import { VideoChapterModule } from './video-chapter/video-chapter.module';
import { UserModule } from '@/user/user.module';
import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';

@Module({
  imports: [PrismaModule, VideoChapterModule, UserModule],
  providers: [VideoCourseService, VideoCourseResolver, JwtService, RedisService],
})
export class VideoCourseModule {}
