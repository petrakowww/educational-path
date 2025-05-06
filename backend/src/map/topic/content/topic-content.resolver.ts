import { Authorization } from '@/auth/decorators/auth.decorator';

import { FindTopicContentArgs } from './args/topic-content.args';
import { CreateTopicContentDto } from './dto/create-topic-content.dto';
import { TopicContentModel } from './model/topic-content.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TopicContentService } from './topic-content.service';

@Resolver(() => TopicContentModel)
export class TopicContentResolver {
    constructor(private readonly topicContentService: TopicContentService) {}

    @Query(() => TopicContentModel, { nullable: true })
    async getTopicContent(@Args() args: FindTopicContentArgs) {
        return this.topicContentService.findByRouteAndNode(
            args.routeId,
            args.nodeId,
        );
    }

    @Query(() => [TopicContentModel])
    async getAllTopicContents(@Args('routeId') routeId: string) {
        return this.topicContentService.findAllByRoute(routeId);
    }

    @Authorization()
    @Mutation(() => TopicContentModel)
    async createTopicContent(@Args('data') data: CreateTopicContentDto) {
        return this.topicContentService.create(data);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async deleteTopicContent(@Args() args: FindTopicContentArgs) {
        return this.topicContentService.delete(args.routeId, args.nodeId);
    }
}
