// attachment.resolver.ts
import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { AttachmentService } from './attachment.service';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { CreateAttachmentInput } from './dto/create-attachment.dto';
import { Attachment } from './dto/attachment.dto';

@Resolver(() => Attachment)
export class AttachmentResolver {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Authorization()
  @Mutation(() => Attachment)
  async createAttachment(
    @Args('input') input: CreateAttachmentInput,
    @CurrentUser() user: User,
  ) {
    return this.attachmentService.createAttachment(user.id, input);
  }

  @Authorization()
  @Mutation(() => Boolean)
  async deleteAttachment(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() user: User,
  ) {
    return this.attachmentService.deleteAttachment(user.id, id);
  }
}
