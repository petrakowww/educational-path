import { randomInt } from 'crypto';

import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';

import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class TwoFactorAuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly mailService: MailService,
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

    public async sendTwoFactorToken(email: string): Promise<boolean> {
        const twoFactorToken = await this.generateTwoFactorToken(email);

        await this.mailService.sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token,
        );

        return true;
    }

    private async generateTwoFactorToken(email: string) {
        const token = randomInt(100000, 1000000).toString();
        const expiresIn = new Date(Date.now() + 5 * 60 * 1000);

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
            },
        });

        return twoFactorToken;
    }
}
