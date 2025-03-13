import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';

import { UserService } from '../user.service';
import { Module } from '@nestjs/common';

import { AvatarController } from './avatar.controller';
import { AvatarService } from './avatar.service';

@Module({
    providers: [AvatarService, UserService, JwtService, RedisService],
    controllers: [AvatarController],
    exports: [AvatarService],
})
export class AvatarModule {}
