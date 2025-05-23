import { Field, InputType, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateImageInput {
  @Field(() => ID)
  @IsString()
  courseId: string;

  @Field()
  @IsString()
  imageUrl: string;
}
