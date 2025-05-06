import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TopicContentModel {
  @Field()
  id: string;

  @Field()
  routeId: string;

  @Field()
  nodeId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
