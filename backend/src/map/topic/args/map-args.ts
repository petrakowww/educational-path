import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class FindTopicMapArgs {
  @Field(() => ID)
  id: string;
}
