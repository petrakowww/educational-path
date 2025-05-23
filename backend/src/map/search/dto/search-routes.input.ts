import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SearchRoutesInput {
  @Field({ nullable: true })
  search?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field({ nullable: true })
  verifiedOnly?: boolean;

  @Field({ nullable: true })
  type?: 'PUBLIC' | 'PRIVATE' | 'ALL';

  @Field({ nullable: true })
  hasVideo?: boolean;

  @Field(() => Date, { nullable: true })
  dateStart?: Date;

  @Field(() => Date, { nullable: true })
  dateEnd?: Date;

  @Field(() => [Int], { nullable: true })
  topicCountRange?: [number, number];

  @Field({ nullable: true })
  sortBy?: 'recency' | 'popularity';

  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => Int, { defaultValue: 6 })
  pageSize: number;
}
