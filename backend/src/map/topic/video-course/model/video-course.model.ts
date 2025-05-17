import { ObjectType, Field, ID } from '@nestjs/graphql';
import { VideoChapter } from '../video-chapter/model/video-chapter.model';
import { CourseAccess } from '../course-access/model/course-access.model';

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

  @Field(() => [VideoChapter])
  chapters: VideoChapter[];

  @Field(() => [CourseAccess])
  CourseAccess: CourseAccess[];
}
