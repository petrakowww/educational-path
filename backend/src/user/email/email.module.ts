import { TokenService } from '@/auth/tokens/token.service';
import { TwoFactorAuthService } from '@/auth/two-factor-auth/two-factor-auth.service';
import { MailService } from '@/libs/mail/mail.service';

import { Module } from '@nestjs/common';

import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { AuthSharedModule } from '@/auth/auth.module';

@Module({
    imports: [AuthSharedModule],
    controllers: [EmailController],
    providers: [
        EmailService,
        TwoFactorAuthService,
        TokenService,
        MailService,
    ],
})
export class EmailModule {}
