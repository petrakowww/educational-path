import { randomInt } from 'crypto';
import { randomUUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import { PrismaService } from '@/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class TokenService {
    private readonly TOKEN_EXPIRATION_MS = 3600 * 1000; // 1 час
    private readonly OTP_EXPIRATION_MS = 5 * 60 * 1000; // 5 минут
    private readonly OTP_RANGE = [100000, 1000000];

    public constructor(private readonly prismaService: PrismaService) {}

    public async generateToken(userId: string, email: string, type: TokenType) {
        const token = uuidv4();
        const expiresIn = new Date(Date.now() + this.TOKEN_EXPIRATION_MS);

        await this.prismaService.token.deleteMany({ where: { userId, type } });

        return await this.prismaService.token.create({
            data: { userId, token, expiresIn, type, email },
        });
    }

    public async generateOtp(userId: string, email: string, type: TokenType) {
        const { otp, expiresIn } = this.generateOtpParams();

        await this.prismaService.token.deleteMany({
            where: { userId, type },
        });

        return await this.prismaService.token.create({
            data: { userId, token: otp, expiresIn, type, email },
        });
    }

    public async generateOAuthOtp(
        userId: string,
        email: string,
        type: TokenType,
    ) {
        const { otp, expiresIn } = this.generateOtpParams();
        const oauthToken = uuidv4();

        await this.prismaService.token.deleteMany({
            where: { userId, type },
        });

        return await this.prismaService.token.create({
            data: { userId, token: otp, expiresIn, type, email, oauthToken },
        });
    }

    public async findToken(token: string, type: TokenType) {
        return await this.prismaService.token.findFirst({
            where: { token, type },
        });
    }

    public async findByOAuth(oauth: string, type: TokenType) {
        return await this.prismaService.token.findFirst({
            where: {
                oauthToken: oauth,
                type,
            },
        });
    }

    public async deleteToken(id: string) {
        return await this.prismaService.token.delete({ where: { id } });
    }

    public async deleteExpiredTokens() {
        await this.prismaService.token.deleteMany({
            where: { expiresIn: { lt: new Date() } },
        });
    }

    public async deleteUserTokens(userId: string, type: TokenType) {
        await this.prismaService.token.deleteMany({
            where: {
                userId,
                type,
            },
        });
    }

    @Cron(CronExpression.EVERY_DAY_AT_NOON)
    public async handleExpiresToken() {
        await this.prismaService.token
            .deleteMany({
                where: {
                    expiresIn: {
                        lt: new Date(),
                    },
                },
            })
            .then(() => {
                console.log('Токены успешно удалены');
            })
            .catch(error => {
                console.error('Ошибка при удалении токенов:', error);
            });
    }

    private generateOtpParams() {
        const [start, end] = this.OTP_RANGE;
        const otp = randomInt(start, end).toString();
        const expiresIn = new Date(Date.now() + this.OTP_EXPIRATION_MS);

        return {
            otp,
            expiresIn,
        };
    }
}
