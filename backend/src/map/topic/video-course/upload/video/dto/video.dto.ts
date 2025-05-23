import { Field, InputType, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateChapterVideoInput {
  @Field(() => ID)
  @IsString()
  chapterId: string;

  @Field()
  @IsString()
  videoUrl: string;
}
