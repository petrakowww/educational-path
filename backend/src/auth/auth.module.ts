import { getProvidersConfig } from '@/config/providers.config';
import { getRecaptchaConfig } from '@/config/recaptcha.config';
import { MailModule } from '@/libs/mail/mail.module';
import { UserModule } from '@/user/user.module';

import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { JwtModule } from './jwt/jwt.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { ProviderModule } from './provider/provider.module';
import { TokenModule } from './tokens/token.module';
import { TwoFactorAuthModule } from './two-factor-auth/two-factor-auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

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
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
