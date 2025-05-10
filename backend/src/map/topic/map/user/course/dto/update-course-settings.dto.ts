import { IsEnum, IsOptional, IsUUID } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';
import { CourseModeType, CourseViewType } from '@prisma/__generated__';

@InputType()
export class UpdateCourseSettingsInput {
    @Field(() => ID)
    @IsUUID()
    topicMapId: string;

    @Field(() => CourseViewType, { nullable: true })
    @IsEnum(CourseViewType)
    @IsOptional()
    view?: CourseViewType;

    @Field(() => CourseModeType, { nullable: true })
    @IsEnum(CourseModeType)
    @IsOptional()
    mode?: CourseModeType;
}
