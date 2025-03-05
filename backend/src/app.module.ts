import { GraphQLModule } from '@nestjs/graphql';
import { AccountModule } from './auth/account/account.module';
import { AuthModule } from './auth/auth.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { ProviderModule } from './auth/provider/provider.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { MailModule } from './libs/mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { getGraphQLConfig } from './config/graphql.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: !IS_DEV_ENV,
            isGlobal: true,
        }),
        GraphQLModule.forRootAsync({
            driver: ApolloDriver,
            imports: [ConfigModule],
            useFactory: getGraphQLConfig,
            inject: [ConfigService],
        }),
        PrismaModule,
        AuthModule,
        UserModule,
        AccountModule,
        ProviderModule,
        MailModule,
        EmailConfirmationModule,
        PasswordRecoveryModule,
        TwoFactorAuthModule,
    ],
})
export class AppModule {}
