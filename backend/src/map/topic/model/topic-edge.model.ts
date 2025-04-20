import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TopicNodeModel } from './topic-node.model';

@ObjectType()
export class TopicEdgeModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  fromId: string;

  @Field(() => String)
  toId: string;

  @Field(() => TopicNodeModel)
  from: TopicNodeModel;

  @Field(() => TopicNodeModel)
  to: TopicNodeModel;
}
