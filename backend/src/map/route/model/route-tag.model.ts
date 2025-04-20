import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RouteModel } from './route.model';
import { TagModel } from '../../tag/model/tag.model';

@ObjectType()
export class RouteTagModel {
  @Field(() => ID)
  id: string;

  @Field(() => RouteModel)
  route: RouteModel;

  @Field(() => TagModel)
  tag: TagModel;
}
