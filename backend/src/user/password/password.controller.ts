import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { ChangePasswordDto } from './dto/change-password.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@prisma/__generated__';

import { PasswordService } from './password.service';

@Controller('/user/password')
export class PasswordController {
    public constructor(private readonly passwordService: PasswordService) {}

    @Post('/change')
    @Authorization()
    @HttpCode(HttpStatus.OK)
    public async changePassword(
        @Body() dto: ChangePasswordDto,
        @CurrentUser() user: User,
    ) {
        return this.passwordService.newPassword(user, dto);
    }
}
