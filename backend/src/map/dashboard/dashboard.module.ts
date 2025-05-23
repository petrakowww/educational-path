import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { Module } from '@nestjs/common';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardService } from './dashboard.service';


@Module({
    providers: [
        DashboardResolver,
        DashboardService,
        PrismaService,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class DashboardModule {}
