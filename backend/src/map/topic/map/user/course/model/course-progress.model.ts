import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CourseProgressSummary {
  @Field(() => Int)
  completed: number;

  @Field(() => Int)
  inProgress: number;

  @Field(() => Int)
  notStarted: number;

  @Field(() => Int)
  skipped: number;

  @Field(() => Int)
  total: number;
}
