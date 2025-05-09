import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ChecklistItem } from './checklist.model';

@ObjectType()
export class UserChecklistProgress {
    @Field(() => ID)
    id: string;

    @Field()
    userCourseId: string;

    @Field()
    checklistItemId: string;

    @Field()
    done: boolean;

    @Field(() => ChecklistItem)
    checklist: ChecklistItem;
}
