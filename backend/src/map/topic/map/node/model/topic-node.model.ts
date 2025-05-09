import GraphQLJSON from 'graphql-type-json';

import { UserTopicProgress } from '../../user/progress/model/user-progress.model';
import { ChecklistItem } from '../checklist/model/checklist.model';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompletionType, NodeKind } from '@prisma/__generated__';
import { UserChecklistProgress } from '../../user/checklist/model/user-checklist.model';

registerEnumType(NodeKind, {
    name: 'NodeKind',
});

registerEnumType(CompletionType, {
    name: 'CompletionType',
});

@ObjectType()
export class TopicNode {
    @Field(() => ID)
    id: string;

    @Field()
    topicMapId: string;

    @Field(() => NodeKind)
    kind: NodeKind;

    @Field()
    type: string;

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

    @Field()
    completionType: CompletionType;

    @Field(() => [UserTopicProgress])
    UserTopicProgress: UserTopicProgress[];

    @Field(() => [ChecklistItem])
    checklist: ChecklistItem[];
}
