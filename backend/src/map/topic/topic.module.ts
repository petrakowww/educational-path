import { Module } from "@nestjs/common";
import { TopicMapResolver } from "./topic.resolver";
import { TopicMapService } from "./topic.service";
import { PrismaService } from "@/prisma/prisma.service";
import { TopicContentService } from "./content/topic-content.service";
import { TopicContentResolver } from "./content/topic-content.resolver";
import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { UserService } from '@/user/user.service';



@Module({
  providers: [
    PrismaService,
    JwtService,
    RedisService,
    UserService,
    TopicMapResolver,
    TopicMapService,
    TopicContentResolver,
    TopicContentService,
  ],
})
export class TopicModule {}
