import { Field, ObjectType } from '@nestjs/graphql';
import { GoalStat } from './goal-stat';

@ObjectType()
export class WeeklyGoalsOutput {
  @Field(() => GoalStat)
  topics: GoalStat;

  @Field(() => GoalStat)
  videos: GoalStat;

  @Field(() => GoalStat)
  deadlines: GoalStat;
}