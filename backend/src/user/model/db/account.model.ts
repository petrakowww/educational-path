import { UserModel } from '@/user/model/db/user.model';

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountModel {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    accountId: string;

    @Field(() => String)
    type: string;

    @Field(() => String)
    provider: string;

    @Field(() => String, { nullable: true })
    refreshToken?: string;

    @Field(() => String, { nullable: true })
    accessToken?: string;

    @Field(() => Date)
    expiresAt: Date;

    @Field(() => UserModel)
    user: UserModel;
}
