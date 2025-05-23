import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class ReorderChapterInput {
  @Field(() => ID)
  id: string;

  @Field(() => Number)
  position: number;
}

@InputType()
export class ReorderVideoChaptersInput {
  @Field(() => ID)
  courseId: string;

  @Field(() => [ReorderChapterInput])
  chapters: ReorderChapterInput[];
}
