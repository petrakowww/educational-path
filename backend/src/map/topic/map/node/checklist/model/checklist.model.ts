import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChecklistItem {
    @Field(() => ID)
    id: string;

    @Field()
    topicNodeId: string;

    @Field()
    text: string;
}
