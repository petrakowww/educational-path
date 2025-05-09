import { IsOptional, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTopicEdgeInput {
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
