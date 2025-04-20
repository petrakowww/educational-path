import { RouteModel } from '../../route/model/route.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { TopicEdgeModel } from './topic-edge.model';

@ObjectType()
export class TopicNodeModel {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    content?: string;

    @Field(() => RouteModel)
    route: RouteModel;

    @Field(() => [TopicEdgeModel], { nullable: true })
    incomingEdges?: TopicEdgeModel[];

    @Field(() => [TopicEdgeModel], { nullable: true })
    outgoingEdges?: TopicEdgeModel[];
}
