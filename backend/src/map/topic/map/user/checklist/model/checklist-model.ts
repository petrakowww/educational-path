import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChecklistItem {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  topicNodeId: string;
}