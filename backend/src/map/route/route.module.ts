import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { Module } from '@nestjs/common';

import { RouteResolver } from './route.resolver';
import { RouteService } from './route.service';

@Module({
    providers: [
        RouteService,
        RouteResolver,
        PrismaService,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class RouteModule {}
