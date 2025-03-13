import { RedisModule } from '../redis/redis.module';
import { Module } from '@nestjs/common';

import { JwtService } from './jwt.service';

@Module({
    imports: [RedisModule],
    providers: [JwtService],
    exports: [JwtService],
})
export class JwtModule {}
