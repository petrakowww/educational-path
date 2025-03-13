import { UserModel } from '@/user/model/db/user.model';

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillProfile {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    headline: string;

    @Field(() => String, { nullable: true })
    githubUrl: string;

    @Field(() => String, { nullable: true })
    vkUrl: string;

    @Field(() => String, { nullable: true })
    telegramUrl: string;

    @Field(() => String, { nullable: true })
    profilename: string;

    @Field(() => UserModel)
    user: UserModel;
}
