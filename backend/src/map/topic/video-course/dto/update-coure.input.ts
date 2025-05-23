import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class UpdateVideoCourseInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  isPublished?: boolean;

  @Field({ nullable: true })
  price?: number;
}
