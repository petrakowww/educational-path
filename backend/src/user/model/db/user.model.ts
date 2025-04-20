import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { AccountModel } from './account.model';
import { SkillProfile } from './skill-profile.model';
import { AuthMethod } from '@prisma/__generated__';

registerEnumType(AuthMethod, {name: 'AuthMethod'})

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

    @Field(() => AuthMethod)
    method: AuthMethod;

    @Field(() => [AccountModel], { nullable: true })
    accounts?: AccountModel[];

    @Field(() => SkillProfile, { nullable: true })
    skillProfile?: SkillProfile;

    @Field(() => String)
    password: string;

    @Field({ nullable: true })
    message?: string;
}
