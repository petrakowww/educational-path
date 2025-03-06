import { AccountModule } from './auth/account/account.module';
import { AuthModule } from './auth/auth.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { JwtModule } from './auth/jwt/jwt.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { ProviderModule } from './auth/provider/provider.module';
import { RedisModule } from './auth/redis/redis.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { getGraphQLConfig } from './config/graphql.config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { MailModule } from './libs/mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

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
        JwtModule,
    ],
})
export class AppModule {}
