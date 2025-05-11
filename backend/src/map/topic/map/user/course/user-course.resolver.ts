import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { StartCourseInput } from './dto/start-course.dto';
import { UserCourse } from './model/user-course.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { UserCourseService } from './user-course.service';
import { UpdateCourseSettingsInput } from './dto/update-course-settings.dto';

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
    @Query(() => UserCourse)
    async getUserCourse(
        @CurrentUser() user: User,
        @Args('topicMapId') topicMapId: string,
    ) {
        console.log(topicMapId);
        return this.userCourseService.getUserCourse(user, topicMapId);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async updateUserCourseSettings(
        @CurrentUser() user: User,
        @Args('input') input: UpdateCourseSettingsInput,
    ): Promise<boolean> {
        return this.userCourseService.updateSettings(user, input);
    }
}
