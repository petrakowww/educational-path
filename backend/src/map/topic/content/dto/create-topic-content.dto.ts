import { IsNotEmpty, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTopicContentDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    routeId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    nodeId: string;
}
