import { getProvidersConfig } from '@/config/providers.config';
import { getRecaptchaConfig } from '@/config/recaptcha.config';
import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { AccountService } from './account/account.service';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { JwtService } from './jwt/jwt.service';
import { ProviderModule } from './provider/provider.module';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        ProviderModule.registerAsync({
            imports: [ConfigModule],
            useFactory: getProvidersConfig,
            inject: [ConfigService],
        }),
        GoogleRecaptchaModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getRecaptchaConfig,
            inject: [ConfigService],
        }),
        forwardRef(() => EmailConfirmationModule),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        UserService,
        MailService,
        TwoFactorAuthService,
        AccountService,
    ],
    exports: [AuthService],
})
export class AuthModule {}
