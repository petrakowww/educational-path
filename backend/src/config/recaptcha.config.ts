import { Request } from 'express';

import { isDev } from '@/libs/common/utils/is-dev.util';

import { ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModuleOptions } from '@nestlab/google-recaptcha';

export const getRecaptchaConfig = (
    configService: ConfigService,
): GoogleRecaptchaModuleOptions => {
    return {
        secretKey: configService.getOrThrow<string>(
            'GOOGLE_RECAPTCHA_SECKET_KEY',
        ),
        response: (req: Request) => {
            const recaptcha = req.headers.recaptcha;
            return Array.isArray(recaptcha) ? recaptcha[0] : recaptcha || '';
        },
        skipIf: isDev(configService),
    };
};
