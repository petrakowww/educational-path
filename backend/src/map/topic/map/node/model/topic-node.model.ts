import GraphQLJSON from 'graphql-type-json';

import { UserTopicProgress } from '../../user/progress/model/user-progress.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { NodeType } from '@prisma/__generated__';
import { IsEnum } from 'class-validator';
import { ChecklistItem } from '../../user/checklist/model/checklist-model';
import { VideoCourse } from '@/map/topic/video-course/model/video-course.model';

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

    @Field(() => [VideoCourse], { nullable: true })
	videoCourses: VideoCourse[];
}
