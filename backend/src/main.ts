import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);
    // const redis = new IORedis({
    //     host: config.getOrThrow('REDIS_HOST'),
    //     port: config.getOrThrow<number>('REDIS_PORT_EXTERNAL'),
    //     password: config.getOrThrow('REDIS_PASSWORD'),
    // });

    app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')));

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
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
