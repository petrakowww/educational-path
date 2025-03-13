import { MailService } from '@/libs/mail/mail.service';

import { TokenService } from '../tokens/token.service';
import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class TwoFactorAuthService {
    constructor(
        private readonly mailService: MailService,
        private readonly tokenService: TokenService,
    ) {}

    public async validateTwoFactorToken(
        email: string,
        type: TokenType,
        code: string,
    ): Promise<boolean> {
        const token = await this.tokenService.findToken(code, type);

        if (!token || token.email !== email) {
            throw new NotFoundException(
                'Токен двухфакторной аутентификации не найден. Убедитесь, что вы запрашивали токен для этого адреса электронной почты.',
            );
        }

        if (token.token !== code) {
            throw new BadRequestException(
                'Неверный код двухфакторной аутентификации. Пожалуйста, проверьте введенный код и повторите попытку.',
            );
        }

        if (new Date(token.expiresIn) < new Date()) {
            throw new BadRequestException(
                'Срок действия токена двухфакторной аутентификации истек. Пожалуйста, запросите новый токен.',
            );
        }

        await this.tokenService.deleteUserTokens(email, token.type);

        return true;
    }

    public async sendTwoFactorToken(email: string, type: TokenType): Promise<boolean> {
        const twoFactorToken = await this.tokenService.generateOtp(email, type, false);
    
        if (!twoFactorToken) {
            throw new InternalServerErrorException('Ошибка сервера при создании токена.');
        }
    
        await this.mailService.sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token,
            type,
        );
    
        return true;
    }

    public async sendTwoFactorAuthToken(email: string, type: TokenType): Promise<string> {
        const twoFactorToken = await this.tokenService.generateOtp(email, type, true);
    
        if (!twoFactorToken || !twoFactorToken.oauthToken) {
            throw new InternalServerErrorException('Ошибка сервера при создании OAuth токена.');
        }
    
        await this.mailService.sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token,
            type,
        );
    
        return twoFactorToken.oauthToken;
    }
    
}
