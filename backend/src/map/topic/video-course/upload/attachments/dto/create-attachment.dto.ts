import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttachmentInput {
    @Field()
    @IsString()
    name: string;

    @Field()
    @IsString()
    url: string;

    @Field()
    @IsString()
    courseId: string;
}
