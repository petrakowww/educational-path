import { InputType, Field, ID, Int } from "@nestjs/graphql";

@InputType()
export class CreateVideoChapterInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  videoUrl?: string;

  @Field(() => ID)
  courseId: string;

  @Field(() => Int, { nullable: true })
  position?: number;
}
