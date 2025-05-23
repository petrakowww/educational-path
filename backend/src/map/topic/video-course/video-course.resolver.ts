import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { OptionalAuthGuard } from '@/auth/guard/auth.guard';

import { CreateVideoCourseInput } from './dto/create-course.input';
import { UpdateVideoCourseInput } from './dto/update-coure.input';
import { VideoCourse } from './model/video-course.model';
import { UserVideoCourse } from './user-video-course/model/user-video-course.model';
import { ReorderVideoChaptersInput } from './video-chapter/dto/reorder-chapter.input';
import { UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { VideoCourseService } from './video-course.service';

@Resolver(() => VideoCourse)
export class VideoCourseResolver {
    constructor(private readonly courseService: VideoCourseService) {}

    @Query(() => [VideoCourse])
    async publishedCourses() {
        return this.courseService.findAllPublished();
    }

    @Authorization()
    @Query(() => VideoCourse)
    async videoCourse(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user?: User,
    ) {
        return this.courseService.findCourseById(user?.id ?? null, id);
    }

    @UseGuards(OptionalAuthGuard)
    @Query(() => [VideoCourse])
    async videoCoursesByNode(
        @Args('topicNodeId', { type: () => ID }) topicNodeId: string,
        @CurrentUser() user?: User,
    ) {
        return this.courseService.findCoursesByTopicNode(
            user?.id ?? null,
            topicNodeId,
        );
    }

    @Authorization()
    @Mutation(() => VideoCourse)
    async createVideoCourse(
        @Args('input') input: CreateVideoCourseInput,
        @CurrentUser() user: User,
    ) {
        return this.courseService.createCourse(user.id, input);
    }

    @Authorization()
    @Mutation(() => VideoCourse)
    async updateVideoCourse(
        @Args('input') input: UpdateVideoCourseInput,
        @CurrentUser() user: User,
    ) {
        return this.courseService.updateCourse(user.id, input);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async deleteVideoCourse(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        await this.courseService.deleteCourse(user.id, id);
        return true;
    }

    @Authorization()
    @Mutation(() => VideoCourse)
    async publishVideoCourse(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        return this.courseService.publishCourse(user.id, id);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async reorderVideoChapters(
        @Args('input') input: ReorderVideoChaptersInput,
        @CurrentUser() user: User,
    ) {
        await this.courseService.reorderChapters(user.id, input);
        return true;
    }

    @Authorization()
    @Mutation(() => UserVideoCourse)
    async startCourse(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        return this.courseService.startCourse(user.id, id);
    }
}
