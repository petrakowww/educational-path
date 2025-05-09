import { TopicNode } from './model/topic-node.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { TopicNodeService } from './topic-node.service';


@Resolver(() => TopicNode)
export class TopicNodeResolver {
    constructor(private readonly topicNodeService: TopicNodeService) {}

    @Query(() => TopicNode)
    async getTopicNodeById(@Args('id') id: string) {
        return this.topicNodeService.getTopicNodeById(id);
    }
}
