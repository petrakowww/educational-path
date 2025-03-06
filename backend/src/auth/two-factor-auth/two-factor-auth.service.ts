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
                'The two-factor authentication token was not found. Make sure that you requested a token for this email address.',
            );
        }

        if (existingToken.token !== code) {
            throw new BadRequestException(
                'Invalid two-factor authentication code. Please check the entered code and try again.',
            );
        }

        if (new Date(existingToken.expiresIn) < new Date()) {
            throw new BadRequestException(
                'The two-factor authentication token has expired. Please request a new token.',
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
            throw new BadRequestException('Missing OAuth token.');
        }

        const token = await this.prismaService.token.findUnique({
            where: {
                oauthToken: oauthToken,
            },
        });

        if (!token) {
            throw new BadRequestException('Invalid authentication code.');
        }

        const isValid = await this.validateTwoFactorToken(
            token.email,
            dto.code,
        );
        if (!isValid) {
            throw new BadRequestException('Invalid authentication code.');
        }

        const user = await this.userService.findByEmail(token.email);
        if (!user) {
            throw new NotFoundException('User not found.');
        }

        return this.authService.issueTokens(res, user);
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
                'Server error when creating a token',
            );
        }

        await this.mailService.sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token,
        );

        if (isOAuth) {
            if (!twoFactorToken.oauthToken) {
                throw new InternalServerErrorException(
                    'OAuth token generation failed',
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
