import { SentMessageInfo } from 'nodemailer';

import { ConfirmationTemplate } from './templates/confirmation.template';
import { ResetPasswordTemplate } from './templates/reset-password.template';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/components';

@Injectable()
export class MailService {
    public constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
    ) {}

    public async sendConfirmationEmail(
        email: string,
        token: string,
    ): Promise<SentMessageInfo> {
        const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
        const html = await render(ConfirmationTemplate({ domain, token }));

        return this.sendMail(email, 'Email Confirmation', html);
    }

    public async sendPasswordResetEmail(
        email: string,
        token: string,
    ): Promise<SentMessageInfo> {
        const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
        const html = await render(ResetPasswordTemplate({ domain, token }));

        return this.sendMail(email, 'Password Reset', html);
    }

    private sendMail(email: string, subject: string, html: string) {
        return this.mailerService.sendMail({
            to: email,
            subject,
            html,
        });
    }
}
