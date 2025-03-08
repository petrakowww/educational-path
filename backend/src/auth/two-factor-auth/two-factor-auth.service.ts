import { randomInt } from 'crypto';
import { randomUUID } from 'crypto';
import { Response } from 'express';

import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { AuthService } from '../auth.service';
import { TwoFactorDto } from './dto/two-factor.dto';
import {
    BadRequestException,
    forwardRef,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class TwoFactorAuthService {
    private readonly COOKIE_EMAIL = '2fa_email';
    private readonly TOKEN_EXPIRATION_MS = 5 * 60 * 1000; // 5 минут
    private readonly TOKEN_RANGE = [100000, 1000000];

    constructor(
        private readonly prismaService: PrismaService,
        private readonly mailService: MailService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    public async validateTwoFactorToken(
        email: string,
        code: string,
    ): Promise<boolean> {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: TokenType.TWO_FACTOR,
            },
        });

        if (!existingToken) {
            throw new NotFoundException(
                'Токен двухфакторной аутентификации не найден. Убедитесь, что вы запрашивали токен для этого адреса электронной почты.',
            );
        }

        if (existingToken.token !== code) {
            throw new BadRequestException(
                'Неверный код двухфакторной аутентификации. Пожалуйста, проверьте введенный код и повторите попытку.',
            );
        }

        if (new Date(existingToken.expiresIn) < new Date()) {
            throw new BadRequestException(
                'Срок действия токена двухфакторной аутентификации истек. Пожалуйста, запросите новый токен.',
            );
        }

        await this.prismaService.token.deleteMany({
            where: {
                email,
                type: TokenType.TWO_FACTOR,
            },
        });

        return true;
    }

    public async verifyTwoFactorAuthentication(
        res: Response,
        dto: TwoFactorDto,
        oauthToken: string,
    ) {
        if (!oauthToken) {
            throw new BadRequestException('Отсутствует токен OAuth.');
        }

        const token = await this.prismaService.token.findUnique({
            where: {
                oauthToken: oauthToken,
            },
        });

        if (!token) {
            throw new BadRequestException('Неверный код аутентификации.');
        }

        const isValid = await this.validateTwoFactorToken(
            token.email,
            dto.code,
        );
        if (!isValid) {
            throw new BadRequestException('Неверный код аутентификации.');
        }

        const user = await this.userService.findByEmail(token.email);
        if (!user) {
            throw new NotFoundException('Пользователь не найден.');
        }

        return this.authService.generateJwtTokens(res, user);
    }

    public async sendTwoFactorToken(
        email: string,
        isOAuth = false,
    ): Promise<string | boolean> {
        const twoFactorToken = await this.generateTwoFactorToken(
            email,
            isOAuth,
        );

        if (!twoFactorToken) {
            throw new InternalServerErrorException(
                'Ошибка сервера при создании токена.',
            );
        }

        await this.mailService.sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token,
        );

        if (isOAuth) {
            if (!twoFactorToken.oauthToken) {
                throw new InternalServerErrorException(
                    'Не удалось сгенерировать токен OAuth.',
                );
            }
            return twoFactorToken.oauthToken;
        }

        return true;
    }

    private async generateTwoFactorToken(email: string, isOAuth: boolean) {
        const [start, end] = this.TOKEN_RANGE;
        const token = randomInt(start, end).toString();
        const expiresIn = new Date(Date.now() + this.TOKEN_EXPIRATION_MS);

        const oauthToken = isOAuth ? randomUUID() : null;

        await this.prismaService.token.deleteMany({
            where: {
                email,
                type: TokenType.TWO_FACTOR,
            },
        });

        const twoFactorToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.TWO_FACTOR,
                oauthToken,
            },
        });

        return twoFactorToken;
    }
}
