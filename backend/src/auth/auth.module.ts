import { getProvidersConfig } from '@/config/providers.config';
import { getRecaptchaConfig } from '@/config/recaptcha.config';
import { MailService } from '@/libs/mail/mail.service';
import { UserModule } from '@/user/user.module';

import { UserOAuthAccountService } from '../user/oauth-account/account.service';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { JwtModule } from './jwt/jwt.module';
import { ProviderModule } from './provider/provider.module';
import { TokenService } from './tokens/token.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from '@/libs/mail/mail.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { TokenModule } from './tokens/token.module';
import { TwoFactorAuthModule } from './two-factor-auth/two-factor-auth.module';

@Module({
    imports: [
        JwtModule,
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
        forwardRef(() => UserModule),
        ProviderModule,
        MailModule,
        EmailConfirmationModule,
        PasswordRecoveryModule,
        TwoFactorAuthModule,
        JwtModule,
        TokenModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        MailService,
        TwoFactorAuthService,
        UserOAuthAccountService,
        EmailConfirmationService,
        TokenService,
    ],
    exports: [AuthService],
})
export class AuthModule {}
