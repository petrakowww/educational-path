import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { TokenService } from '../tokens/token.service';
import { Module } from '@nestjs/common';

import { TwoFactorAuthService } from './two-factor-auth.service';

@Module({
    providers: [TwoFactorAuthService, MailService, UserService, TokenService],
    exports: [TwoFactorAuthService],
})
export class TwoFactorAuthModule {}
