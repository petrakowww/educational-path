import { RedisStore } from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import IORedis from 'ioredis';

import { parse, StringValue } from './libs/common/utils/ms.util';
import { parseBoolean } from './libs/common/utils/parse-boolean.util';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);
    const redis = new IORedis({
        host: config.getOrThrow('REDIS_HOST'),
        port: config.getOrThrow<number>('REDIS_PORT_EXTERNAL'),
        password: config.getOrThrow('REDIS_PASSWORD'),
    });

    app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')));

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    app.use(
        session({
            secret: config.getOrThrow<string>('SESSION_SECRET'),
            name: config.getOrThrow<string>('SESSION_NAME'),
            resave: true,
            saveUninitialized: false,
            cookie: {
                domain: config.getOrThrow<string>('SESSION_DOMAIN'),
                maxAge: parse(
                    config.getOrThrow<StringValue>('SESSION_MAX_AGE'),
                ),
                httpOnly: parseBoolean(
                    config.getOrThrow<string>('SESSION_HTTP_ONLY'),
                ),
                secure: parseBoolean(
                    config.getOrThrow<string>('SESSION_SECURE'),
                ),
                sameSite: 'lax',
                signed: true,
            },
            store: new RedisStore({
                client: redis,
                prefix: config.getOrThrow<string>('SESSION_FOLDER'),
            }),
        }),
    );

    app.enableCors({
        origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
        credentials: true,
        exposedHeaders: ['set-cookie'],
    });

    await app.listen(config.getOrThrow<string>('BACKEND_PORT'));
}

bootstrap();
