import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { SkillProfileDto } from './dto/update-skill-profile.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SkillProfileService } from './skill-profile.service';
import { SkillProfile } from '../model/db/skill-profile.model';

@Resolver(() => SkillProfile)
export class SkillProfileResolver {
    public constructor(private readonly skillProfileService: SkillProfileService) {}

    @Authorization()
    @Mutation(() => SkillProfile)
    async updateProfile(
        @CurrentUser('id') userId: string,
        @Args('skillProfileDto') skillProfileDto: SkillProfileDto,
    ) {
        const updatedProfile = await this.skillProfileService.updateProfile(
            userId,
            skillProfileDto,
        );

        return { updatedProfile };
    }
}
