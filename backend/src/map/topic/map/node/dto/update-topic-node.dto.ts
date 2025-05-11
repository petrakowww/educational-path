import { IsEnum, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

import { ChecklistItemInput } from '../../user/checklist/dto/checklist-input.dto';
import { Field, InputType } from '@nestjs/graphql';
import { NodeType } from '@prisma/__generated__';

@InputType()
export class UpdateTopicNodeInput {
    @Field()
    id: string;

    @Field()
    @IsString()
    title: string;

    @Field()
    meta: string;

    @Field()
    @IsEnum(NodeType)
    type: NodeType;

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
