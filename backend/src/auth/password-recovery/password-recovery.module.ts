import { MailService } from '@/libs/mail/mail.service';

import { Module } from '@nestjs/common';

import { PasswordRecoveryController } from './password-recovery.controller';
import { PasswordRecoveryService } from './password-recovery.service';
import { AuthSharedModule } from '../auth.module';
import { TokenService } from '../tokens/token.service';

@Module({
    imports: [AuthSharedModule],
    controllers: [PasswordRecoveryController],
    providers: [PasswordRecoveryService, MailService, TokenService],
})
export class PasswordRecoveryModule {}
