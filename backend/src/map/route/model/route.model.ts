
import { UserModel } from '@/user/model/db/user.model';

import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { PrivateType } from '@prisma/__generated__';

import { RouteTagModel } from './route-tag.model';
import { TopicMap } from '@/map/topic/map/model/topic-map.model';

registerEnumType(PrivateType, { name: 'PrivateType' });

@ObjectType()
export class Route {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => PrivateType)
    privateType: PrivateType;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => UserModel)
    user: UserModel;

    @Field(() => TopicMap, { nullable: true })
    topicMap?: TopicMap;

    @Field(() => [RouteTagModel], { nullable: true })
    tags?: RouteTagModel[];
}
