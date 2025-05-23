import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';

import { AttachmentModule } from './upload/attachments/attachment.module';
import { VideoChapterModule } from './video-chapter/video-chapter.module';
import { Module } from '@nestjs/common';

import { VideoCourseResolver } from './video-course.resolver';
import { VideoCourseService } from './video-course.service';
import { VideoModule } from './upload/video/video.module';
import { ImageModule } from './upload/image/image.module';

@Module({
    imports: [PrismaModule, VideoChapterModule, UserModule, AttachmentModule, VideoModule, ImageModule],
    providers: [
        VideoCourseService,
        VideoCourseResolver,
        JwtService,
        RedisService,
    ],
})
export class VideoCourseModule {}
