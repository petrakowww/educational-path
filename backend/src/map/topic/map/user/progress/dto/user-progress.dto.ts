import { Field, InputType } from '@nestjs/graphql';
import { NodeStatus } from '@prisma/__generated__';

@InputType()
export class UpdateTopicProgressInput {
  @Field()
  topicNodeId: string;

  @Field(() => NodeStatus)
  status: NodeStatus;
}
