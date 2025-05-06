import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RouteModel } from '../../route/model/route.model';
import { TopicContentModel } from '../content/model/topic-content.model';

@ObjectType()
export class TopicMapModel {
  @Field(() => ID)
  id: string;

  @Field(() => RouteModel, {nullable: true})
  route: RouteModel;

  @Field(() => String)
  routeId: string;

  @Field(() => String)
  nodeData: string;

  @Field(() => String)
  edgeData: string;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [TopicContentModel], { nullable: true })
  topicContent?: TopicContentModel[];
}
