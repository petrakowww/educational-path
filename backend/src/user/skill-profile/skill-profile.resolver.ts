import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { SkillProfile } from '../model/db/skill-profile.model';
import { SkillProfileDto } from './dto/skill-profile.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { SkillProfileService } from './skill-profile.service';

@Resolver(() => SkillProfile)
export class SkillProfileResolver {
    public constructor(
        private readonly skillProfileService: SkillProfileService,
    ) {}

    @Authorization()
    @Mutation(() => SkillProfile)
    async updateSkillProfile(
        @CurrentUser() user: User,
        @Args('skillProfileDto') skillProfileDto: SkillProfileDto,
    ) {
        const updatedProfile =
            await this.skillProfileService.updateSkillProfile(
                user,
                skillProfileDto,
            );

        return { updatedProfile };
    }
}
