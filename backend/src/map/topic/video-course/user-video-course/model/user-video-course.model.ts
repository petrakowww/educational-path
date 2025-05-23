import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserVideoCourse {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  courseId: string;

  @Field()
  startedAt: Date;
}
