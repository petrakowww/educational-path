import GraphQLJSON from 'graphql-type-json';

import { UserTopicProgress } from '../../user/progress/model/user-progress.model';
import { ChecklistItem } from '../checklist/model/checklist.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NodeType } from '@prisma/__generated__';
import { IsEnum } from 'class-validator';

@ObjectType()
export class TopicNode {
    @Field(() => ID)
    id: string;

    @Field()
    topicMapId: string;

    @Field()
    @IsEnum(NodeType)
    type: NodeType;

    @Field()
    title: string;

    @Field()
    meta: string;

    @Field(() => GraphQLJSON, { nullable: true })
    posxy?: {
        x: number;
        y: number;
        width: number;
        height: number;
        styleWidth: number;
        styleHeigth: number;
    };

    @Field({ nullable: true })
    zIndex?: number;

    @Field(() => [UserTopicProgress])
    UserTopicProgress: UserTopicProgress[];

    @Field(() => [ChecklistItem])
    checklist: ChecklistItem[];
}
