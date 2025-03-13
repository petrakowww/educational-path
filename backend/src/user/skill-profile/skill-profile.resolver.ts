import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { SkillProfile } from '../model/db/skill-profile.model';
import { SkillProfileDto } from './dto/skill-profile.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { UserSkillProfileService } from './skill-profile.service';

@Resolver(() => SkillProfile)
export class UserSkillProfileResolver {
    public constructor(
        private readonly skillProfileService: UserSkillProfileService,
    ) {}

    @Authorization()
    @Mutation(() => SkillProfile)
    async updateSkillProfile(
        @CurrentUser() user: User,
        @Args('dto') dto: SkillProfileDto,
    ) {
        const updatedProfile =
            await this.skillProfileService.updateSkillProfile(user, dto);

        return { updatedProfile };
    }
}
