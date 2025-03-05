import { AuthMethod } from '@prisma/__generated__';

export type TypeUserInfo = {
    id: string;
    picture: string;
    name: string;
    email: string;
    accessToken?: string | null;
    refreshToken?: string;
    expiresAt: Date;
    provider: AuthMethod;
    accountId: string;
};

export type OAuthLoginResult = {
    requires2FA: boolean;
    message?: string;
    oauthToken?: string;
    email?: string;
};
