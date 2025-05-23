import { InputType, Field, ID, Int } from "@nestjs/graphql";

@InputType()
export class UpdateVideoChapterInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  videoUrl?: string;

  @Field(() => Int, { nullable: true })
  position?: number;

  @Field({ nullable: true })
  isPublished?: boolean;
}
