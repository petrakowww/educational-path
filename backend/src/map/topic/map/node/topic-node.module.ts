import { Module } from '@nestjs/common';

import { TopicNodeResolver } from './topic-node.resolver';
import { TopicNodeService } from './topic-node.service';

@Module({
    providers: [TopicNodeService, TopicNodeResolver],
})
export class TopicNodeModule {}
