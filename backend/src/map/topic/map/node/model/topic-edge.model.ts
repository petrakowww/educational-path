import GraphQLJSON from 'graphql-type-json';

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopicEdge {
    @Field(() => ID)
    id: string;

    @Field()
    topicMapId: string;

    @Field()
    sourceId: string;

    @Field()
    targetId: string;

    @Field({ nullable: true })
    meta?: string;
}
