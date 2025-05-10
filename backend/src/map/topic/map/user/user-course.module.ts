import { UserService } from '@/user/user.service';
import { UserChecklistItemService } from './checklist/user-checklist.service';
import { UserCourseResolver } from './course/user-course.resolver';
import { UserCourseService } from './course/user-course.service';
import { UserTopicProgressService } from './progress/user-progress.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { UserTopicProgressResolver } from './progress/user-progress.resolver';

@Module({
    providers: [
        UserCourseService,
        UserTopicProgressService,
        UserChecklistItemService,
        UserCourseResolver,
        UserTopicProgressResolver,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class UserCourseModule {}
