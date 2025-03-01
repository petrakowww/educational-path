import { GoogleProfile } from './interfaces/google.profile.interface';
import { TypeProviderOptions } from './types/provider.options.type';
import { TypeUserInfo } from './types/user-info.type';
import { AuthMethod } from '@prisma/__generated__';

import { BaseOAuthService } from './base-oauth.service';

export class GoogleProvider extends BaseOAuthService {
    public constructor(options: TypeProviderOptions) {
        super({
            name: AuthMethod.GOOGLE,
            authorizeUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
            accessUrl: 'https://oauth2.googleapis.com/token',
            profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
            scopes: options.scopes,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
    }

    public extractUserInfo(data: GoogleProfile): TypeUserInfo {
        return super.extractUserInfo({
            ...data,
            email: data.email,
            name: data.name,
            picture: data.picture,
        });
    }
}
