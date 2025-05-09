import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserCourse } from '../../course/model/user-course.model';
import { ChecklistItem } from '../../../node/checklist/model/checklist.model';

@ObjectType()
export class UserChecklistProgress {
  @Field(() => ID)
  id: string;

  @Field()
  userCourseId: string;

  @Field()
  checklistItemId: string;

  @Field()
  done: boolean;

  @Field(() => ChecklistItem)
  checklist: ChecklistItem;

  @Field(() => UserCourse)
  userCourse: UserCourse;
}
