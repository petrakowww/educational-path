import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class StartCourseInput {
  @Field(() => ID)
  @IsUUID()
  topicMapId: string;
}
