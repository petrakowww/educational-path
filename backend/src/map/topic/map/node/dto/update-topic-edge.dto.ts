import { IsOptional, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class UpdateTopicEdgeInput {
    @Field()
    id: string;

    @Field()
    @IsString()
    sourceId: string;

    @Field()
    @IsString()
    targetId: string;

    @Field({ nullable: true })
    @IsOptional()
    meta?: string;
}
