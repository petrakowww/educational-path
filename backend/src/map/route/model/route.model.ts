import { TopicNodeModel } from '../../topic/model/topic-node.model';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { RouteTagModel } from './route-tag.model';
import { PrivateType } from '@prisma/__generated__';
import { UserModel } from '@/user/model/db/user.model';

registerEnumType(PrivateType, {name: 'PrivateType'})

@ObjectType()
export class RouteModel {
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

    @Field(() => [TopicNodeModel], { nullable: true })
    topicNodes?: TopicNodeModel[];

    @Field(() => [RouteTagModel], { nullable: true })
    tags?: RouteTagModel[];
}
