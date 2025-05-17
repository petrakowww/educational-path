import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class DeleteVideoChapterInput {
  @Field(() => ID)
  id: string;
}