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
        userId: string,
        type: TokenType,
        code: string,
        email?: string,
    ): Promise<boolean> {
        const token = await this.tokenService.findToken(code, type);

        if (!token || token.userId !== userId) {
            throw new NotFoundException(
                'Токен двухфакторной аутентификации не найден. Убедитесь, что вы запрашивали токен для этого пользователя.',
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

        if (type === TokenType.CHANGE_EMAIL && email && email !== token.email) {
            throw new BadRequestException(
                'Указанный email не соответствует тому, для которого был отправлен токен.',
            );
        }

        await this.tokenService.deleteUserTokens(userId, token.type);

        return true;
    }

    public async sendTwoFactorToken(userId: string, email: string, type: TokenType): Promise<boolean> {
        const twoFactorToken = await this.tokenService.generateOtp(userId, email, type);
    
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

    public async sendEmailChangeToken(
        userId: string,
        newEmail: string,
    ): Promise<boolean> {
        const token = await this.tokenService.generateOtp(userId, newEmail, TokenType.CHANGE_EMAIL);
    
        if (!token) {
            throw new InternalServerErrorException('Ошибка сервера при создании токена.');
        }
    
        await this.mailService.sendTwoFactorTokenEmail(
            token.email,
            token.token,
            TokenType.CHANGE_EMAIL,
        );
    
        return true;
    }
    

    public async sendTwoFactorAuthToken(userId: string, email: string, type: TokenType): Promise<string> {
        const twoFactorToken = await this.tokenService.generateOAuthOtp(userId, email, type);
    
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
