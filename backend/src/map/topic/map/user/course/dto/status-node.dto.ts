import { InputType, Field } from '@nestjs/graphql';
import { NodeStatus } from '@prisma/__generated__';

@InputType()
export class SetNodeStatusInput {
  @Field()
  topicNodeId: string;

  @Field(() => NodeStatus)
  status: NodeStatus;
}
