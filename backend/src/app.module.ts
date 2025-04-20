import * as path from 'path';

import { AuthModule } from './auth/auth.module';
import { TokenService } from './auth/tokens/token.service';
import { getGraphQLConfig } from './config/graphql.config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MapModule } from './map/map.module';

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
        MapModule,
    ],
    providers: [TokenService],
})
export class AppModule {}
