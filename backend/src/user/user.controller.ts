import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { ChangePasswordDto } from './password/dto/change-password.dto';
import { PasswordService } from './password/password.service';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Patch,
    Post,
} from '@nestjs/common';
import { User } from '@prisma/__generated__';
import { EmailService } from './email/email.service';
import { EmailDto } from './email/dto/email.dto';

@Controller('/user')
export class UserController {
    public constructor(
        private readonly passwordService: PasswordService,
        private readonly emailService: EmailService,
    ) {}

    @Post('/password/change')
    @Authorization()
    @HttpCode(HttpStatus.OK)
    public async changePassword(
        @Body() dto: ChangePasswordDto,
        @CurrentUser() user: User,
    ) {
        return await this.passwordService.newPassword(user, dto);
    }

    @Authorization()
    @Patch('/email/change')
    @HttpCode(HttpStatus.OK)
    public async changeEmail(@CurrentUser() user: User, @Body() dto: EmailDto) {
        return await this.emailService.handleEmailChange(user, dto);
    }
}
