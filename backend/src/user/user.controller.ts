import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserRole } from '@prisma/__generated__';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authorization()
    @HttpCode(HttpStatus.OK)
    @Get('profile')
    public async findProfile(@CurrentUser('id') userId: string) {
        return this.userService.findById(userId);
    }

    @Authorization(UserRole.ADMIN)
    @HttpCode(HttpStatus.OK)
    @Get('id/:id')
    public async findById(@Param('id') id: string) {
        return this.userService.findById(id);
    }
}
