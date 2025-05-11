import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { UserService } from '@/user/user.service';

import { ChecklistItemService } from './checklist/checklist-item-service.service';
import { UserCourseResolver } from './course/user-course.resolver';
import { UserCourseService } from './course/user-course.service';
import { UserTopicProgressResolver } from './progress/user-progress.resolver';
import { UserTopicProgressService } from './progress/user-progress.service';
import { Module } from '@nestjs/common';
import { ChecklistItemResolver } from './checklist/checklist-item-resolve.resolver';
import { UserCourseDeadlineResolver } from './course/deadline/deadline.resolver';
import { UserCourseDeadlineService } from './course/deadline/deadline.service';

@Module({
    providers: [
        UserCourseService,
        UserTopicProgressService,
        ChecklistItemService,
        UserCourseDeadlineService,
        ChecklistItemResolver,
        UserCourseResolver,
        UserTopicProgressResolver,
        UserCourseDeadlineResolver,
        UserService,
        JwtService,
        RedisService,
    ],
})
export class UserCourseModule {}
