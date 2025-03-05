import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    name: string;

    @Field(() => String, { nullable: true })
    picture?: string;

    @Field(() => Boolean)
    isVerified: boolean;

    @Field(() => Boolean)
    isTwoFactorEnabled: boolean;
}
