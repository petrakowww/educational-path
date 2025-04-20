import { Field, InputType, PartialType } from '@nestjs/graphql';
import { PrivateType } from '@prisma/__generated__';
import { CreateRouteDto } from './create-route.dto';

@InputType()
export class UpdateRouteDto extends PartialType(CreateRouteDto) {
  @Field(() => PrivateType, { nullable: true })
  privateType?: PrivateType;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];
}
