import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { UpdateExternalUserDto } from './dto/update-user.dto';
import { UserModel } from './model/db/user.model';
import { UpdateSkillProfileDto } from './skill-profile/dto/update-skill-profile.dto';
import { SkillProfileService } from './skill-profile/skill-profile.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserRole } from '@prisma/__generated__';

import { UserService } from './user.service';
import { UpdateProfileResponse } from './model/response/update-profile.model';

@Resolver(() => UserModel)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly skillProfileService: SkillProfileService,
    ) {}

    @Authorization()
    @Query(() => UserModel)
    public async findProfile(@CurrentUser('id') userId: string) {
        return this.userService.findById(userId);
    }

    @Authorization(UserRole.ADMIN)
    @Query(() => UserModel)
    public async findById(@Args('id') id: string) {
        return this.userService.findById(id);
    }

    @Authorization()
    @Mutation(() => UserModel)
    public async updateSettings(@CurrentUser('id') userId: string) {}

    @Authorization()
    @Mutation(() => UpdateProfileResponse)
    async updateProfile(
        @CurrentUser('id') userId: string,
        @Args('userExternalDto') userExternalDto: UpdateExternalUserDto,
        @Args('skillProfileDto') skillProfileDto: UpdateSkillProfileDto,
    ) {
       
        const updateUserExternalFields =
            await this.userService.updateExternalUser(userId, userExternalDto);
        const updatedProfile = await this.skillProfileService.updateProfile(
            userId,
            skillProfileDto,
        );
        
        return { updateUserExternalFields, updatedProfile };
    }
}
