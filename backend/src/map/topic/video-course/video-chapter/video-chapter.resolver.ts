import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { ChapterProgress } from './chapter-progress/model/chapter-progress.model';
import { CreateVideoChapterInput } from './dto/create-chapter.input';
import { UpdateVideoChapterInput } from './dto/update-chapter.input';
import { VideoChapter } from './model/video-chapter.model';
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { VideoChapterService } from './video-chapter.service';

@Resolver(() => VideoChapter)
export class VideoChapterResolver {
    constructor(private readonly chapterService: VideoChapterService) {}

    @Authorization()
    @Query(() => VideoChapter, { nullable: true })
    async videoChapter(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.getChapterById(user.id, id);
    }

    @Authorization()
    @Query(() => [VideoChapter])
    async availableChapters(
        @Args('courseId', { type: () => ID }) courseId: string,
        @CurrentUser() user?: User,
    ) {
        return this.chapterService.getAvailableChaptersForUser(
            user?.id ?? '',
            courseId,
        );
    }

    @Authorization()
    @Mutation(() => VideoChapter)
    async createVideoChapter(
        @Args('input') input: CreateVideoChapterInput,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.createChapter(user.id, input);
    }

    @Authorization()
    @Mutation(() => VideoChapter)
    async updateVideoChapter(
        @Args('input') input: UpdateVideoChapterInput,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.updateChapter(user.id, input);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async deleteVideoChapter(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        await this.chapterService.deleteChapter(user.id, id);
        return true;
    }

    @Authorization()
    @Mutation(() => VideoChapter)
    async publishVideoChapter(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.publishChapter(user.id, id);
    }

    @Authorization()
    @Mutation(() => VideoChapter)
    async unpublishVideoChapter(
        @Args('id', { type: () => ID }) id: string,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.unpublishChapter(user.id, id);
    }

    @Authorization()
    @Mutation(() => ChapterProgress)
    async completeChapter(
        @Args('id', { type: () => ID }) chapterId: string,
        @CurrentUser() user: User,
    ) {
        return this.chapterService.completeChapter(user.id, chapterId);
    }
}
