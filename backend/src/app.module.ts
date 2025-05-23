import * as path from 'path';

import { AuthModule } from './auth/auth.module';
import { TokenService } from './auth/tokens/token.service';
import { getGraphQLConfig } from './config/graphql.config';
import { FileStorageModule } from './file-storage/file-storage.module';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { MapModule } from './map/map.module';
import { PrismaModule } from './prisma/prisma.module';
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
            rootPath: path.resolve(process.cwd(), 'public'), // ✅ без src
            serveRoot: '/', // ✅ чтобы файлы были доступны по /images/... и др.
        }),
        ScheduleModule.forRoot(),
        PrismaModule,
        AuthModule,
        UserModule,
        MapModule,
        FileStorageModule,
    ],
    providers: [TokenService],
})
export class AppModule {}
