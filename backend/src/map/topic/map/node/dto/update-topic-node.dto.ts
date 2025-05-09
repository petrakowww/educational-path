import { IsEnum, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

import { ChecklistItemInput } from '../checklist/dto/checklist-input.dto';
import { Field, InputType } from '@nestjs/graphql';
import { CompletionType, NodeKind } from '@prisma/__generated__';

@InputType()
export class UpdateTopicNodeInput {
    @Field()
    id: string;

    @Field()
    @IsString()
    title: string;

    @Field()
    @IsString()
    type: string;

    @Field()
    meta: string;

    @Field(() => NodeKind)
    @IsEnum(NodeKind)
    kind: NodeKind;

    @Field(() => CompletionType)
    @IsEnum(CompletionType)
    completionType: CompletionType;

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

    @Field(() => [ChecklistItemInput], { nullable: true })
    checklist?: ChecklistItemInput[];
}
