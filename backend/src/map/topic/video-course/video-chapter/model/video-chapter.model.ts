import { ChapterProgress } from '../chapter-progress/model/chapter-progress.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VideoChapter {
    @Field(() => ID)
    id: string;

    @Field()
    courseId: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    videoUrl?: string;

    @Field()
    position: number;

    @Field()
    isPublished: boolean;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [ChapterProgress])
    progress: ChapterProgress[];
}
