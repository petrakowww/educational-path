
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { UserTopicProgressService } from './user-progress.service';
import { UserTopicProgress } from './model/user-progress.model';
import { UpdateTopicProgressInput } from './dto/user-progress.dto';

@Resolver()
export class UserTopicProgressResolver {
  constructor(private readonly progressService: UserTopicProgressService) {}

  @Authorization()
  @Mutation(() => UserTopicProgress)
  async updateUserTopicProgressStatus(
    @Args('input') input: UpdateTopicProgressInput,
    @CurrentUser() user: User
  ) {
    return this.progressService.updateStatus(user, input.topicNodeId, input.status);
  }
}
