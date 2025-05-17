import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class DeleteVideoCourseInput {
  @Field(() => ID)
  id: string;
}
