import { RouteModule } from './route/route.module';
import { TagModule } from './tag/tag.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [TagModule, RouteModule],
})
export class MapModule {}
