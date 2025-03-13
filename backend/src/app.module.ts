import * as path from 'path';

import { AuthModule } from './auth/auth.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { JwtModule } from './auth/jwt/jwt.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { ProviderModule } from './auth/provider/provider.module';
import { TokenService } from './auth/tokens/token.service';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { getGraphQLConfig } from './config/graphql.config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { MailModule } from './libs/mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvatarModule } from './user/avatar/avatar.module';
import { EmailModule } from './user/email/email.module';
import { PasswordModule } from './user/password/password.module';
import { UserModule } from './user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';

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
        ServeStaticModule.forRoot({
            rootPath: path.resolve(process.cwd(), 'src/public'),
            serveRoot: '/public',
        }),
        ScheduleModule.forRoot(),
        PrismaModule,
        AuthModule,
        UserModule,
        AvatarModule,
        ProviderModule,
        MailModule,
        EmailConfirmationModule,
        PasswordRecoveryModule,
        TwoFactorAuthModule,
        JwtModule,
        PasswordModule,
        EmailModule,
    ],
    providers: [TokenService],
})
export class AppModule {}
