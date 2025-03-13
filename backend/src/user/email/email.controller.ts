import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { EmailDto } from './dto/email.dto';
import { Body, Controller, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { User } from '@prisma/__generated__';

import { EmailService } from './email.service';

@Controller('/user/email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Authorization()
    @Patch('/change')
    @HttpCode(HttpStatus.OK)
    public async changeEmail(@CurrentUser() user: User, @Body() dto: EmailDto) {
        return this.emailService.handleEmailChange(user, dto);
    }
}
