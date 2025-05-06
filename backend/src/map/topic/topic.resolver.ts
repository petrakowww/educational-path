import { Authorization } from '@/auth/decorators/auth.decorator';

import { FindTopicMapArgs } from './args/map-args';
import { SaveTopicMapDto } from './dto/save-topic-map.dto';
import { TopicMapModel } from './model/topic-map.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TopicMapService } from './topic.service';
import { UseGuards } from '@nestjs/common';
import { IsRouteOwnerGuard } from './guard/is-route-owner-guard';
import { CurrentUser } from '@/auth/decorators/user.decorator';

@Resolver(() => TopicMapModel)
export class TopicMapResolver {
    constructor(private readonly topicMapService: TopicMapService) {}

    @Query(() => TopicMapModel)
    async findTopicMap(@Args() args: FindTopicMapArgs) {
        return this.topicMapService.findById(args.id);
    }

    @Query(() => TopicMapModel)
    async findTopicMapByRouteId(@Args('routeId') routeId: string) {
        return this.topicMapService.findTopicMap(routeId);
    }

    @Authorization()
    @Mutation(() => TopicMapModel)
    async saveTopicMap(
        @CurrentUser('id') userId: string,
        @Args('data') data: SaveTopicMapDto,
    ) {
        return this.topicMapService.save(userId, data);
    }

    @Authorization()
    @UseGuards(IsRouteOwnerGuard)
    @Mutation(() => Boolean)
    async deleteTopicMap(@Args() args: FindTopicMapArgs) {
        return this.topicMapService.delete(args.id);
    }
}
