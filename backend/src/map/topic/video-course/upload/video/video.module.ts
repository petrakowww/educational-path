import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { FileStorageModule } from '@/file-storage/file-storage.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserService } from '@/user/user.service';

import { Module } from '@nestjs/common';

import { VideoChapterUploaderResolver } from './video.resolver';
import { VideoChapterUploaderService } from './video.service';

@Module({
    imports: [PrismaModule, FileStorageModule],
    providers: [
        VideoChapterUploaderResolver,
        VideoChapterUploaderService,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class VideoModule {}
