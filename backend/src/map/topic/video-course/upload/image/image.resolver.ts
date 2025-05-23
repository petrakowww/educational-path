import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { VideoCourse } from '../../model/video-course.model';
import { ImageUploaderService } from './image.service';
import { UpdateImageInput } from './dto/image.dto';

@Resolver(() => VideoCourse)
export class ImageUploaderResolver {
  constructor(private readonly service: ImageUploaderService) {}

  @Authorization()
  @Mutation(() => VideoCourse)
  async updateCourseImage(
    @Args('input') input: UpdateImageInput,
    @CurrentUser() user: User,
  ) {
    return this.service.updateCourseImage(user.id, input.courseId, input.imageUrl);
  }
}
