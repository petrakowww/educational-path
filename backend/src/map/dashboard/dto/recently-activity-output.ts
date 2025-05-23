import { Field, ObjectType } from "@nestjs/graphql";
import { Route } from "@/map/route/model/route.model";
import { VideoCourse } from "@/map/topic/video-course/model/video-course.model";

@ObjectType()
export class RecentActivityOutput {
  @Field(() => [Route])
  recentRoutes: Route[];

  @Field(() => [VideoCourse])
  recentVideoCourses: VideoCourse[];
}