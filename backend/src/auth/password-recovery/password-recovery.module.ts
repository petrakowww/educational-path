import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { TokenService } from '../tokens/token.service';
import { Module } from '@nestjs/common';

import { PasswordRecoveryController } from './password-recovery.controller';
import { PasswordRecoveryService } from './password-recovery.service';

@Module({
    controllers: [PasswordRecoveryController],
    providers: [
        PasswordRecoveryService,
        MailService,
        TokenService,
        UserService,
    ],
    exports: [PasswordRecoveryService],
})
export class PasswordRecoveryModule {}
