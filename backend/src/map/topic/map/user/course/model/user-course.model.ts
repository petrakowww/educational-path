import { TopicMap } from '../../../model/topic-map.model';
import { UserChecklistProgress } from '../../checklist/model/user-checklist.model';
import { UserTopicProgress } from '../../progress/model/user-progress.model';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CourseModeType, CourseViewType } from '@prisma/__generated__';

registerEnumType(CourseViewType, {
    name: 'CourseViewType',
});

registerEnumType(CourseModeType, {
    name: 'CourseModeType',
});

@ObjectType()
export class UserCourse {
    @Field(() => ID)
    id: string;

    @Field()
    userId: string;

    @Field()
    topicMapId: string;

    @Field(() => TopicMap)
    topicMap: TopicMap;

    @Field(() => [UserTopicProgress], { nullable: true })
    progress?: UserTopicProgress[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Date, { nullable: true })
    deadline?: Date;

    @Field(() => CourseViewType, { nullable: true })
    view?: CourseViewType;

    @Field(() => CourseModeType, { nullable: true })
    mode?: CourseModeType;

    @Field(() => [UserChecklistProgress])
    UserChecklistProgress?: UserChecklistProgress;
}
