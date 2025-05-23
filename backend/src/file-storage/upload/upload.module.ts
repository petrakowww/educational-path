import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { FileStorageService } from '@/file-storage/file-storage.service';
import { UserService } from '@/user/user.service';
import { RedisService } from '@/auth/redis/redis.service';
import { JwtService } from '@/auth/jwt/jwt.service';

@Module({
  controllers: [UploadController],
  providers: [FileStorageService, UserService, RedisService, JwtService],
})
export class UploadModule {}
