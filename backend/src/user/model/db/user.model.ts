import { Field, ID, ObjectType } from '@nestjs/graphql';

import { AccountModel } from './account.model';
import { SkillProfile } from './skill-profile.model';

@ObjectType()
export class UserModel {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    name: string;

    @Field(() => String, { nullable: true })
    avatar?: string;

    @Field(() => Boolean)
    isVerified: boolean;

    @Field(() => String)
    role: string;

    @Field(() => Boolean)
    isTwoFactorEnabled: boolean;

    @Field(() => String)
    method: string;

    @Field(() => [AccountModel], { nullable: true })
    accounts?: AccountModel[];

    @Field(() => SkillProfile, { nullable: true })
    skillProfile?: SkillProfile;
}
