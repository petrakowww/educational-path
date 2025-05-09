import { IsArray, IsOptional, IsString } from 'class-validator';

import { UpdateTopicEdgeInput } from '../node/dto/update-topic-edge.dto';
import { UpdateTopicNodeInput } from '../node/dto/update-topic-node.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SaveTopicMapInput {
    @Field()
    @IsString()
    routeId: string;

    @Field(() => [UpdateTopicNodeInput], { nullable: true })
    @IsArray()
    @IsOptional()
    nodes?: UpdateTopicNodeInput[];

    @Field(() => [UpdateTopicEdgeInput], { nullable: true })
    edges?: UpdateTopicEdgeInput[];
}
