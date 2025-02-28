import { TypeOptions } from '@/auth/provider/provider.constants';
import { GitHubProvider } from '@/auth/provider/services/github.provider';
import { GoogleProvider } from '@/auth/provider/services/google.provider';
import { YandexProvider } from '@/auth/provider/services/yandex.provider';

import { ConfigService } from '@nestjs/config';

export const getProvidersConfig = (
    configService: ConfigService,
): TypeOptions => ({
    baseUrl: configService.getOrThrow<string>('APPLICATION_URL'),
    services: [
        new GoogleProvider({
            clientId: configService.getOrThrow<string>('GOOGLE_CLIENT_ID'),
            clientSecret: configService.getOrThrow<string>(
                'GOOGLE_CLIENT_SECRET',
            ),
            scopes: ['email', 'profile'],
        }),
        new YandexProvider({
            clientId: configService.getOrThrow<string>('YANDEX_CLIENT_ID'),
            clientSecret: configService.getOrThrow<string>(
                'YANDEX_CLIENT_SECRET',
            ),
            scopes: ['login:email', 'login:avatar', 'login:info'],
        }),
        new GitHubProvider({
            clientId: configService.getOrThrow<string>('GITHUB_CLIENT_ID'),
            clientSecret: configService.getOrThrow<string>(
                'GITHUB_CLIENT_SECRET',
            ),
            scopes: ['user:email', 'read:user'],
        }),
    ],
});
