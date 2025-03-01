import { isDev } from '@/libs/common/utils/is-dev.util';

import { MailerOptions } from '@nestjs-modules/mailer';
import { TransportType } from '@nestjs-modules/mailer/dist/interfaces/mailer-options.interface';
import { ConfigService } from '@nestjs/config';

export const getMailerConfig = (
    configService: ConfigService,
): MailerOptions => {
    const host = configService.getOrThrow<string>('MAIL_HOST');
    const port = configService.getOrThrow<number>('MAIL_PORT');
    const login = configService.get<string>('MAIL_LOGIN');
    const password = configService.get<string>('MAIL_PASSWORD');

    const transport: TransportType = {
        host,
        port,
        secure: !isDev(configService),
    };

    if (login && password) {
        transport.auth = { user: login, pass: password };
    }

    return {
        transport,
        defaults: {
            from: `"EduPath Team" ${login || 'no-reply@example.com'}`,
        },
    };
};
