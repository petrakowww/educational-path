import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GoalStat {
  @Field()
  value: number;

  @Field()
  target: number;
}