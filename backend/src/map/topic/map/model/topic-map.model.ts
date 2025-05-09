import { Route } from '@/map/route/model/route.model';

import { TopicEdge } from '../node/model/topic-edge.model';
import { TopicNode } from '../node/model/topic-node.model';
import { UserCourse } from '../user/course/model/user-course.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopicMap {
    @Field(() => ID)
    id: string;

    @Field()
    routeId: string;

    @Field(() => Route, { nullable: true })
    route?: Route;

    @Field()
    updatedAt: Date;

    @Field(() => [TopicNode])
    nodes: TopicNode[];

    @Field(() => [TopicEdge])
    edges: TopicEdge[];

    @Field(() => [UserCourse])
    UserCourse: UserCourse[];
}
