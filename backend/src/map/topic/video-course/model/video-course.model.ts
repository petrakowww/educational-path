import { Attachment } from '../upload/attachments/dto/attachment.dto';
import { UserVideoCourse } from '../user-video-course/model/user-video-course.model';
import { VideoChapter } from '../video-chapter/model/video-chapter.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VideoCourse {
    @Field(() => ID)
    id: string;

    @Field()
    topicNodeId: string;

    @Field()
    userId: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    imageUrl?: string;

    @Field()
    isPublished: boolean;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [VideoChapter, { nullable: true }])
    chapters: VideoChapter[];

    @Field(() => [Attachment], { nullable: true })
    Attachment: Attachment[];

    @Field(() => [UserVideoCourse], { nullable: true })
    UserVideoCourse?: UserVideoCourse[];
}
