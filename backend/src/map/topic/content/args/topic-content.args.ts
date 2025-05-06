import { IsNotEmpty, IsString } from 'class-validator';

import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindTopicContentArgs {
    @Field()
    @IsString()
    @IsNotEmpty()
    routeId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    nodeId: string;
}
