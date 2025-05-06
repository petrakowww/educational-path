import { RouteModule } from './route/route.module';
import { TagModule } from './tag/tag.module';
import { TopicModule } from './topic/topic.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [TagModule, RouteModule, TopicModule],
})
export class MapModule {}
