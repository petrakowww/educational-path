import { Authorization } from '@/auth/decorators/auth.decorator';

import { SaveTopicMapInput } from './dto/save-topic-map.dto';
import { TopicMap } from './model/topic-map.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TopicMapService } from './topic-map.service';

@Resolver(() => TopicMap)
export class TopicMapResolver {
    constructor(private readonly topicMapService: TopicMapService) {}

    @Authorization()
    @Mutation(() => TopicMap)
    async saveTopicMap(
        @Args('input') input: SaveTopicMapInput,
    ) {
        return this.topicMapService.saveTopicMap(input);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async deleteTopicMap(@Args('routeId') routeId: string) {
        await this.topicMapService.deleteTopicMap(routeId);
        return true;
    }

    @Query(() => TopicMap)
    async getTopicMap(@Args('routeId') routeId: string) {
        return this.topicMapService.getTopicMap(routeId);
    }
}
