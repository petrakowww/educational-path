import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { AuthModule } from '../auth.module';
import { forwardRef, Module } from '@nestjs/common';

import { TwoFactorAuthController } from './two-factor-auth.controller';
import { TwoFactorAuthService } from './two-factor-auth.service';

@Module({
    imports: [forwardRef(() => AuthModule)],
    controllers: [TwoFactorAuthController],
    providers: [TwoFactorAuthService, MailService, UserService],
    exports: [TwoFactorAuthService],
})
export class TwoFactorAuthModule {}
