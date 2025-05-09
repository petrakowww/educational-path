import { TagModel } from '../../tag/model/tag.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Route } from './route.model';

@ObjectType()
export class RouteTagModel {
    @Field(() => ID)
    id: string;

    @Field(() => Route)
    route: Route;

    @Field(() => TagModel)
    tag: TagModel;
}
