import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { CourseProgressSummary } from '../course/model/course-progress.model';
import { UpdateTopicProgressInput } from './dto/user-progress.dto';
import { UserTopicProgress } from './model/user-progress.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { UserTopicProgressService } from './user-progress.service';

@Resolver()
export class UserTopicProgressResolver {
    constructor(private readonly progressService: UserTopicProgressService) {}

    @Authorization()
    @Query(() => UserTopicProgress)
    async getUserTopicProgress(
        @CurrentUser() user: User,
        @Args('topicNodeId') topicNodeId: string,
    ) {
        return this.progressService.getProgress(user, topicNodeId);
    }

    @Authorization()
    @Mutation(() => UserTopicProgress)
    async updateUserTopicProgressStatus(
        @Args('input') input: UpdateTopicProgressInput,
        @CurrentUser() user: User,
    ) {
        return this.progressService.updateStatus(
            user,
            input.topicNodeId,
            input.status,
        );
    }

    @Authorization()
    @Mutation(() => UserTopicProgress)
    async updateProgressValue(
        @CurrentUser() user: User,
        @Args('topicNodeId') topicNodeId: string,
        @Args('value') value: number,
    ) {
        return this.progressService.updateValue(user, topicNodeId, value);
    }

    @Authorization()
    @Query(() => CourseProgressSummary)
    async getCourseProgress(
        @CurrentUser() user: User,
        @Args('topicMapId') topicMapId: string,
    ): Promise<CourseProgressSummary> {
        return this.progressService.getCourseProgress(user, topicMapId);
    }
}
