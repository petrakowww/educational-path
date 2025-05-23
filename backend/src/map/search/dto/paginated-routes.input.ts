import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Route } from '@/map/route/model/route.model';

@ObjectType()
export class PaginatedRoutes {
  @Field(() => [Route])
  routes: Route[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  currentPage: number;
}
