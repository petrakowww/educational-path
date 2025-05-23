import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { UpdateChapterVideoInput } from './dto/video.dto';
import { VideoChapterUploaderService } from './video.service';
import { VideoChapter } from '../../video-chapter/model/video-chapter.model';

@Resolver(() => VideoChapter)
export class VideoChapterUploaderResolver {
  constructor(private readonly service: VideoChapterUploaderService) {}

  @Authorization()
  @Mutation(() => VideoChapter)
  async updateChapterVideo(
    @Args('input') input: UpdateChapterVideoInput,
    @CurrentUser() user: User,
  ) {
    return this.service.updateChapterVideo(user.id, input.chapterId, input.videoUrl);
  }
}
