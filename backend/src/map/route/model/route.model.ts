
import { UserModel } from '@/user/model/db/user.model';

import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { PrivateType, VerificationStatus } from '@prisma/__generated__';

import { RouteTagModel } from './route-tag.model';
import { TopicMap } from '@/map/topic/map/model/topic-map.model';
import { IsEnum } from 'class-validator';

registerEnumType(PrivateType, { name: 'PrivateType' });

registerEnumType(VerificationStatus, { name: 'VerificationStatus' });

@ObjectType()
export class RouteBase {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => PrivateType)
    @IsEnum(PrivateType)
    privateType: PrivateType;

    @Field(() => VerificationStatus)
    @IsEnum(VerificationStatus)
    isVerified!: VerificationStatus;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => TopicMap, { nullable: true })
    topicMap?: TopicMap;

    @Field(() => [RouteTagModel], { nullable: true })
    tags?: RouteTagModel[];

    @Field(() => Int)
	topicCount: number;
}

@ObjectType()
export class Route extends RouteBase {
    @Field(() => UserModel)
    user: UserModel;
}


