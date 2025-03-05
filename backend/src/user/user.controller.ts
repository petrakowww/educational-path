import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { UpdateUserDto } from './dto/update-user.dto';
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
} from '@nestjs/common';
import { Patch } from '@nestjs/common';
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

    @Authorization()
    @HttpCode(HttpStatus.OK)
    @Patch('profile')
    public async updateProfile(
        @CurrentUser('id') userId: string,
        @Body() dto: UpdateUserDto,
    ) {
        return this.userService.update(userId, dto);
    }
}
