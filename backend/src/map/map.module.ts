import { UserService } from '@/user/user.service';

import { RouteModule } from './route/route.module';
import { TagModule } from './tag/tag.module';
import { TopicMapModule } from './topic/map/topic-map.module';
import { UserCourseModule } from './topic/map/user/user-course.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [TagModule, RouteModule, UserCourseModule, TopicMapModule],
})
export class MapModule {}
