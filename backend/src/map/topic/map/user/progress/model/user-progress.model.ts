import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { NodeStatus } from '@prisma/__generated__';

registerEnumType(NodeStatus, {
    name: 'NodeStatus',
});

@ObjectType()
export class UserTopicProgress {
    @Field(() => ID)
    id: string;

    @Field()
    userCourseId: string;

    @Field()
    topicNodeId: string;

    @Field(() => NodeStatus)
    status: NodeStatus;

    @Field({ nullable: true })
    progressValue?: number;

    @Field({ nullable: true })
    startedAt?: Date;

    @Field({ nullable: true })
    finishedAt?: Date;
}
