import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ChapterProgress } from '../chapter-progress/model/chapter-progress.model';

@ObjectType()
export class VideoChapter {
  @Field(() => ID)
  id: string;

  @Field()
  courseId: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  videoUrl?: string;

  @Field()
  position: number;

  @Field()
  isPublished: boolean;

  @Field()
  isFree: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [ChapterProgress])
  progress: ChapterProgress[];
}
