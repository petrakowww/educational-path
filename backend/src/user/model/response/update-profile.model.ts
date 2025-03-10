import { SkillProfile } from '../db/skill-profile.model';
import { UserModel } from '../db/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateProfileResponse {
    @Field(() => UserModel)
    updateUserExternalFields: UserModel;

    @Field(() => SkillProfile)
    updatedProfile: SkillProfile;
}
