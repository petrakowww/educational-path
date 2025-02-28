import { GitHubProfile } from './interfaces/github.profile.interface';
import { TypeProviderOptions } from './types/provider.options.type';
import { TypeUserInfo } from './types/user-info.type';
import { AuthMethod } from '@prisma/__generated__';

import { BaseOAuthService } from './base-oauth.service';

export class GitHubProvider extends BaseOAuthService {
    public constructor(options: TypeProviderOptions) {
        super({
            name: AuthMethod.GITHUB,
            authorizeUrl: 'https://github.com/login/oauth/authorize',
            accessUrl: 'https://github.com/login/oauth/access_token',
            profileUrl: 'https://api.github.com/user',
            scopes: options.scopes,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
    }

    public extractUserInfo(data: GitHubProfile): TypeUserInfo {
        return super.extractUserInfo({
            email: data.email,
            name: data.name ?? data.login,
            picture: data.avatar_url,
        });
    }
}
