import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { FileStorageModule } from '@/file-storage/file-storage.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserService } from '@/user/user.service';

import { Module } from '@nestjs/common';

import { AttachmentResolver } from './attachment.resolver';
import { AttachmentService } from './attachment.service';

@Module({
    imports: [PrismaModule, FileStorageModule],
    providers: [
        AttachmentService,
        AttachmentResolver,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class AttachmentModule {}
