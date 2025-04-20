import { Resolver, Query } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { TagModel } from './model/tag.model';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { UserDataProps } from '@/user/interfaces/user.interface';


@Resolver(() => TagModel)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query(() => [TagModel])
  async findAllTags(): Promise<TagModel[]> {
    return this.tagService.getAllTags();
  }

  @Query(() => [TagModel])
  async findUserTags(@CurrentUser() user: UserDataProps): Promise<TagModel[]> {
    return this.tagService.getUserTags(user.id);
  }
}
