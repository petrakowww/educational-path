import { VideoCourse } from '../../../model/video-course.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Attachment {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    url: string;

    @Field()
    courseId: string;

    @Field(() => VideoCourse)
    course: VideoCourse;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
