import { YandexProfile } from './interfaces/yandex.profile.interface';
import { TypeProviderOptions } from './types/provider.options.type';
import { TypeUserInfo } from './types/user-info.type';
import { AuthMethod } from '@prisma/__generated__';

import { BaseOAuthService } from './base-oauth.service';

export class YandexProvider extends BaseOAuthService {
    public constructor(options: TypeProviderOptions) {
        super({
            name: AuthMethod.YANDEX,
            authorizeUrl: 'https://oauth.yandex.ru/authorize',
            accessUrl: 'https://oauth.yandex.ru/token',
            profileUrl: 'https://login.yandex.ru/info?format=json',
            scopes: options.scopes,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
    }

    public extractUserInfo(data: YandexProfile): TypeUserInfo {
        return super.extractUserInfo({
            ...data,
            email: data.emails[0],
            name: data.display_name,
            accountId: data.id,
            picture: data.default_avatar_id
                ? `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-200`
                : undefined,
        });
    }
}
