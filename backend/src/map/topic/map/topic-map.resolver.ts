import { Authorization } from '@/auth/decorators/auth.decorator';

import { SaveTopicMapInput } from './dto/save-topic-map.dto';
import { TopicMap } from './model/topic-map.model';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { TopicMapService } from './topic-map.service';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { UserCourse } from './user/course/model/user-course.model';

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

    @Authorization()
    @Query(() => TopicMap)
    async getUserTopicMap(@CurrentUser() user: User, @Args('routeId') routeId: string) {
        return this.topicMapService.getUserTopicMap(user, routeId);
    }

    @ResolveField(() => UserCourse, { name: 'userCourse', nullable: true })
	userCourse(@Parent() topicMap: TopicMap): UserCourse | null {
		return topicMap.UserCourse?.[0] ?? null;
	}
}
