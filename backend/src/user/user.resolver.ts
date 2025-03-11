import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { ChangePasswordDto } from './dto/user-password.dto';
import { UserProfileDto } from './dto/user-profile.dto';
import { UserModel } from './model/db/user.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/__generated__';

import { UserService } from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

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
    public async updateUserProfile(
        @CurrentUser() user: User,
        @Args('userProfileDto') userProfileDto: UserProfileDto,
    ) {
        return await this.userService.updateUser(user, {
            name: userProfileDto.name,
            isTwoFactorEnabled: userProfileDto.isTwoFactorEnabled,
        });
    }

    @Authorization()
    @Mutation(() => UserModel)
    public async updateUserPassword(
        @CurrentUser() user: User,
        @Args('userPasswordDto') userPasswordDto: ChangePasswordDto,
    ) {
        return await this.userService.updatePassword(user, userPasswordDto);
    }
}
