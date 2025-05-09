import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { StartCourseInput } from './dto/start-course.dto';
import { CourseProgressSummary } from './model/course-progress.model';
import { UserCourse } from './model/user-course.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NodeStatus, User } from '@prisma/__generated__';

import { UserCourseService } from './user-course.service';

@Resolver(() => UserCourse)
export class UserCourseResolver {
    constructor(private readonly userCourseService: UserCourseService) {}

    @Authorization()
    @Mutation(() => UserCourse)
    async startCourse(
        @CurrentUser() user: User,
        @Args('input') input: StartCourseInput,
    ) {
        return this.userCourseService.startCourse(user, input);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async removeCourse(
        @CurrentUser() user: User,
        @Args('topicMapId') topicMapId: string,
    ) {
        return this.userCourseService.removeCourse(user, topicMapId);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async setChecklistItemDone(
        @CurrentUser() user: User,
        @Args('checkListItemId') checkListItemId: string,
        @Args('isCompleted') isCompleted: boolean,
    ) {
        this.userCourseService.setChecklistItemDone(
            user,
            checkListItemId,
            isCompleted,
        );

        return isCompleted;
    }

    @Authorization()
    @Mutation(() => Boolean)
    async setNodeStatus(
        @CurrentUser() user: User,
        @Args('topicNodeId') topicNodeId: string,
        @Args('status', { type: () => NodeStatus }) status: NodeStatus,
    ) {
        return this.userCourseService.setNodeStatus(user, topicNodeId, status);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async updateProgressValue(
        @CurrentUser() user: User,
        @Args('topicNodeId') topicNodeId: string,
        @Args('value') value: number,
    ) {
        return this.userCourseService.updateProgressValue(
            user,
            topicNodeId,
            value,
        );
    }

    @Authorization()
    @Query(() => UserCourse)
    async getUserCourse(
        @CurrentUser() user: User,
        @Args('topicMapId') topicMapId: string,
    ) {
        return this.userCourseService.getUserCourse(user, topicMapId);
    }

    @Authorization()
    @Query(() => CourseProgressSummary)
    async getCourseProgress(
        @CurrentUser() user: User,
        @Args('topicMapId') topicMapId: string,
    ): Promise<CourseProgressSummary> {
        return this.userCourseService.getCourseProgress(user, topicMapId);
    }
}
