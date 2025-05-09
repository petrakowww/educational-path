import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateProgressInput {
  @Field()
  topicNodeId: string;

  @Field()
  value: number;
}
