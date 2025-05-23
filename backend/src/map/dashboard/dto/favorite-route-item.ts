import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class FavoriteRouteItem {
  @Field() name: string;
  @Field() favorites: number;
}