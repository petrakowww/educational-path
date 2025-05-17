import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ChapterProgress {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  chapterId: string;

  @Field()
  isCompleted: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
