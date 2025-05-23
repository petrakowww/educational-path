import { SentMessageInfo } from 'nodemailer';

import { ConfirmationTemplate } from './templates/confirmation.template';
import { ResetPasswordTemplate } from './templates/reset-password.template';
import { TwoFactorAuthTemplate } from './templates/two-factor-auth.template';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/components';
import { TokenType } from '@prisma/__generated__';
import { ChangeEmailTemplate } from './templates/change-email.template';

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

        return this.sendMail(email, 'Подтверждение по электронной почте', html);
    }

    public async sendPasswordResetEmail(
        email: string,
        token: string,
    ): Promise<SentMessageInfo> {
        const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
        const html = await render(ResetPasswordTemplate({ domain, token }));

        return this.sendMail(email, 'Сброс пароля', html);
    }

    public async sendTwoFactorTokenEmail(
        email: string,
        token: string,
        type: TokenType = TokenType.TWO_FACTOR,
    ): Promise<SentMessageInfo> {
        const html = await this.getTemplateByType(type, token, email);
    
        return this.sendMail(email, this.getSubjectByType(type), html);
    }

    private sendMail(email: string, subject: string, html: string) {
        return this.mailerService.sendMail({
            to: email,
            subject,
            html,
        });
    }
    private async getTemplateByType(type: TokenType, token: string, email: string): Promise<string> {
        switch (type) {
            case TokenType.TWO_FACTOR:
                return render(TwoFactorAuthTemplate({ token }));
            case TokenType.CHANGE_EMAIL:
                return render(ChangeEmailTemplate({ token, newEmail: email }));
            default:
                throw new Error(`Неизвестный тип токена: ${type}`);
        }
    }
    private getSubjectByType(type: TokenType): string {
        switch (type) {
            case TokenType.TWO_FACTOR:
                return 'Подтверждение вашей личности';
            case TokenType.CHANGE_EMAIL:
                return 'Подтверждение смены почты';
            default:
                return 'Уведомление';
        }
    }
}
