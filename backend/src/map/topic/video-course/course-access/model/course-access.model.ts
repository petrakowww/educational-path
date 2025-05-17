import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CourseAccess {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  videoCourseId: string;

  @Field()
  isOwner: boolean;

  @Field()
  purchasedAt: Date;
}
