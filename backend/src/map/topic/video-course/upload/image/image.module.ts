import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { FileStorageModule } from '@/file-storage/file-storage.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserService } from '@/user/user.service';

import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image.service';
import { ImageUploaderResolver } from './image.resolver';


@Module({
    imports: [PrismaModule, FileStorageModule],
    providers: [
        ImageUploaderService,
        ImageUploaderResolver,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class ImageModule {}
