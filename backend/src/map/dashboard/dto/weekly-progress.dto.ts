import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class WeeklyProgressItem {
  @Field() date: string;
  @Field() count: number;
}