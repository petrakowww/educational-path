import axios from 'axios';

import { BaseProviderOptionsProps } from './types/base-provider.options.type';
import { TokenResponse } from './types/token.options.type';
import { TypeUserInfo } from './types/user-info.type';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class BaseOAuthService {
    private BASE_URL: string;
    private OAUTH_URL: string = '/auth/oauth/callback/';

    public constructor(private readonly options: BaseProviderOptionsProps) {}

    protected extractUserInfo(data: Partial<TypeUserInfo>): TypeUserInfo {
        return {
            ...data,
            id: data.id ?? '',
            email: data.email ?? '',
            name: data.name ?? '',
            avatar: data.avatar ?? '',
            accessToken: data.accessToken ?? null,
            refreshToken: data.refreshToken ?? '',
            expiresAt: data.expiresAt ?? new Date(),
            provider: this.options.name,
            accountId: data.accountId ?? '',
        };
    }

    public loginRequestUrl() {
        const query = new URLSearchParams({
            response_type: 'code',
            client_id: this.options.clientId,
            redirect_uri: this.getRedirectUrl(),
            scope: (this.options.scopes ?? []).join(' '),
            access_type: 'offline',
            prompt: 'select_account',
        });

        return `${this.options.authorizeUrl}?${query}`;
    }

    public async exchangeAccessCode(code: string): Promise<TypeUserInfo> {
        const { clientId, clientSecret, accessUrl, profileUrl } = this.options;

        const tokenQuery = new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: this.getRedirectUrl(),
            grant_type: 'authorization_code',
            code: code,
        });

        try {
            const { data: tokenResponse }: { data: TokenResponse } =
                await axios.post(accessUrl, tokenQuery.toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Accept: 'application/json',
                    },
                });

            if (!tokenResponse.access_token) {
                throw new BadRequestException(
                    `Токен OAuth отсутствует в ответе от ${accessUrl}`,
                );
            }

            try {
                const { data: userInfo } = await axios.get<TypeUserInfo>(
                    profileUrl,
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`,
                        },
                    },
                );

                const userData = this.extractUserInfo(userInfo);

                return {
                    ...userData,
                    accessToken: tokenResponse.access_token,
                    refreshToken: tokenResponse.refresh_token ?? null,
                    expiresAt: this.calculateExpiry(tokenResponse.expires_in),
                    provider: this.options.name,
                };
            } catch (profileError) {
                throw new BadRequestException(
                    `Не удалось получить профиль пользователя: ${(profileError as Error)?.message}`,
                );
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new BadRequestException(
                    `Не удалось выполнить запрос OAuth: ${error.message}`,
                );
            }
            throw new BadRequestException(
                `Непредвиденная ошибка: ${(error as Error).message}`,
            );
        }
    }

    public getRedirectUrl() {
        if (!this.BASE_URL) {
            throw new Error('URL не установлен');
        }
        return new URL(
            `${this.OAUTH_URL}${this.options.name.toLowerCase()}`,
            this.BASE_URL,
        ).toString();
    }

    private calculateExpiry(expiresIn?: number): Date {
        return new Date(Date.now() + (expiresIn ?? 3600) * 1000);
    }

    set baseUrl(value: string) {
        try {
            this.BASE_URL = new URL(value).toString();
        } catch {
            throw new Error('Невалидный URL');
        }
    }

    get name() {
        return this.options.name;
    }

    get accessUrl() {
        return this.options.accessUrl;
    }

    get profileUrl() {
        return this.options.profileUrl;
    }

    get scopes() {
        return this.options.scopes;
    }
}
