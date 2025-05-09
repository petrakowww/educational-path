import { InputType, Field } from '@nestjs/graphql';
import { CompletionType, NodeKind } from '@prisma/__generated__';
import { IsString, IsEnum } from 'class-validator';

@InputType()
export class CreateTopicNodeInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  type: string;

  @Field()
  meta: string;

  @Field(() => NodeKind)
  @IsEnum(NodeKind)
  kind: NodeKind;

  @Field(() => CompletionType)
  @IsEnum(CompletionType)
  completionType: CompletionType;
}

