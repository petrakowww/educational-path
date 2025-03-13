import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { UserAccountService } from './account/user-account.service';
import { EmailDto } from './email/dto/email.dto';
import { UserEmailService } from './email/email.service';
import { ChangePasswordDto } from './password/dto/change-password.dto';
import { UserPasswordService } from './password/password.service';
import {
    Body,
    Controller,
    Delete,
    HttpCode,
    HttpStatus,
    Patch,
    Post,
    Req,
    Res,
} from '@nestjs/common';
import { User } from '@prisma/__generated__';
import { Response, Request } from 'express';

@Controller('/user')
export class UserController {
    public constructor(
        private readonly passwordService: UserPasswordService,
        private readonly emailService: UserEmailService,
        private readonly accountService: UserAccountService,
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

    @Patch('/email/change')
    @Authorization()
    @HttpCode(HttpStatus.OK)
    public async changeEmail(@CurrentUser() user: User, @Body() dto: EmailDto) {
        return await this.emailService.handleEmailChange(user, dto);
    }

    @Delete('/account/delete')
    @Authorization()
    @HttpCode(HttpStatus.OK)
    public async deleteAccount(@CurrentUser() user: User, @Req() req: Request, @Res() res: Response) {
        const result = await this.accountService.deleteAccount(user, req, res);
        return res.status(HttpStatus.OK).json(result);
    }
}
