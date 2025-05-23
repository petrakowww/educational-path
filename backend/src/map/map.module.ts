import { DashboardModule } from './dashboard/dashboard.module';
import { RouteModule } from './route/route.module';
import { MapsSearchModule } from './search/maps-search.module';
import { TagModule } from './tag/tag.module';
import { TopicMapModule } from './topic/map/topic-map.module';
import { UserCourseModule } from './topic/map/user/user-course.module';
import { VideoCourseModule } from './topic/video-course/video-course.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TagModule,
        RouteModule,
        UserCourseModule,
        TopicMapModule,
        VideoCourseModule,
        MapsSearchModule,
        DashboardModule
    ],
})
export class MapModule {}
