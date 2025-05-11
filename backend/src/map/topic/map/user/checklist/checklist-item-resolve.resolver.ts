import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { ChecklistItemWithProgress } from './model/checklist-item-with-progress';
import { ChecklistItem } from './model/checklist-model';
import { UserChecklistProgress } from './model/user-checklist.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { ChecklistItemService } from './checklist-item-service.service';

@Resolver(() => ChecklistItem)
export class ChecklistItemResolver {
    constructor(private readonly checklistItemService: ChecklistItemService) {}
    
    @Mutation(() => UserChecklistProgress)
    @Authorization()
    async markChecklistItem(
        @CurrentUser() user: User,
        @Args('checkListItemId') checkListItemId: string,
        @Args('done') done: boolean,
    ) {
        return this.checklistItemService.markChecklistItem(
            user,
            checkListItemId,
            done,
        );
    }

    @Query(() => [ChecklistItemWithProgress])
    @Authorization()
    async getChecklistProgressByTopic(
        @CurrentUser() user: User,
        @Args('topicNodeId') topicNodeId: string,
    ) {
        return this.checklistItemService.getChecklistProgressByTopic(
            user,
            topicNodeId,
        );
    }
}
