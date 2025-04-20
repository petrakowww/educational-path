import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class FindRouteArgs {
  @Field(() => ID)
  id: string;
}
