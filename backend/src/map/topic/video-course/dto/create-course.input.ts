import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateVideoCourseInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => ID)
  topicNodeId: string;
}