import { InputType, Field } from '@nestjs/graphql';
import { NodeType } from '@prisma/__generated__';
import { IsString, IsEnum } from 'class-validator';

@InputType()
export class CreateTopicNodeInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsEnum(NodeType)
  type: string;

  @Field()
  meta: string;
}

