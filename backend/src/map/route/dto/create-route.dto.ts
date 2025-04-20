import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRouteDto {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];
}
