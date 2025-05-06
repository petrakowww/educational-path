import { CreateTopicContentDto } from '../content/dto/create-topic-content.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SaveTopicMapDto {
    @Field(() => String, { nullable: true })
    nodeData?: string;

    @Field(() => String, { nullable: true })
    edgeData?: string;

    @Field()
    routeId: string;

    @Field(() => [CreateTopicContentDto], { nullable: true })
    contents?: CreateTopicContentDto[];
}
