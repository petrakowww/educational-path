import axios from 'axios';

import { PickTypeUserInfo } from '@/auth/provider/services/types/pick-user-info.type';

import { BaseProviderOptionsProps } from './types/base-provider.options.type';
import { TokenResponse } from './types/token.options.type';
import { TypeUserInfo } from './types/user-info.type';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class BaseOAuthService {
    private BASE_URL: string;
    private OAUTH_URL: string = '/auth/oauth/callback/';

    public constructor(private readonly options: BaseProviderOptionsProps) {}

    protected extractUserInfo<T extends Partial<TypeUserInfo>>(
        data: PickTypeUserInfo<T>,
    ): TypeUserInfo {
        return {
            id: data.id ?? '',
            email: data.email ?? '',
            name: data.name ?? '',
            picture: data.picture ?? '',
            accessToken: data.accessToken ?? null,
            refreshToken: data.refreshToken ?? '',
            expiresAt: data.expiresAt ?? new Date(),
            provider: this.options.name,
        };
    }

    public loginRequestUrl() {
        const query = new URLSearchParams({
            response_type: 'code',
            client_id: this.options.clientId,
            redirect_uri: this.getRedirectUrl(), // Было redirectUrl (ошибка)
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
                    },
                });

            if (!tokenResponse.access_token) {
                throw new BadRequestException(
                    `OAuth token is missing in response from ${accessUrl}`,
                );
            }

            const { data: userInfo } = await axios.get<TypeUserInfo>(
                profileUrl,
                {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                },
            );

            return this.extractUserInfo({
                ...userInfo,
                accessToken: tokenResponse.access_token,
                refreshToken: tokenResponse.refresh_token ?? null,
                expiresAt: this.calculateExpiry(tokenResponse.expires_in),
                provider: this.options.name,
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                throw new BadRequestException(
                    `OAuth request failed: ${error.message}`,
                );
            }
            throw new BadRequestException(
                `Unexpected error: ${(error as Error).message}`,
            );
        }
    }

    public getRedirectUrl() {
        if (!this.BASE_URL) {
            throw new Error('BASE_URL is not set');
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
            throw new Error('Invalid BASE_URL');
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
