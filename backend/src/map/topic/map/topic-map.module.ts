import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { UserService } from '@/user/user.service';

import { TopicNodeModule } from './node/topic-node.module';
import { Module } from '@nestjs/common';

import { TopicMapResolver } from './topic-map.resolver';
import { TopicMapService } from './topic-map.service';

@Module({
    imports: [TopicNodeModule],
    providers: [
        TopicMapResolver,
        TopicMapService,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class TopicMapModule {}
