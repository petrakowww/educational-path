import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './model/user.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserRole } from '@prisma/__generated__';

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
    public async updateProfile(
        @CurrentUser('id') userId: string,
        @Args('dto') dto: UpdateUserDto,
    ) {
        return this.userService.update(userId, dto);
    }
}