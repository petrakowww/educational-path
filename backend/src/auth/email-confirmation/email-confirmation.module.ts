import { MailModule } from '@/libs/mail/mail.module';
import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { TokenService } from '../tokens/token.service';
import { Module } from '@nestjs/common';

import { EmailConfirmationService } from './email-confirmation.service';

@Module({
    imports: [MailModule],
    providers: [
        EmailConfirmationService,
        UserService,
        MailService,
        TokenService,
    ],
    exports: [EmailConfirmationService],
})
export class EmailConfirmationModule {}
