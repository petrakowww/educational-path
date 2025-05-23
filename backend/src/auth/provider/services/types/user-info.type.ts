import { AuthMethod, User } from '@prisma/__generated__';

export type TypeUserInfo = {
    id: string;
    avatar: string;
    name: string;
    email: string;
    accessToken?: string | null;
    refreshToken?: string;
    expiresAt: Date;
    provider: AuthMethod;
    accountId: string;
    github_url?: string;
};

export type OAuthLoginResult =
    | { user: User }
    | {
          requires2FA?: boolean;
          message?: string;
          oauthToken?: string;
          email?: string;
      }
    | { oauthErrorMessage?: string };
