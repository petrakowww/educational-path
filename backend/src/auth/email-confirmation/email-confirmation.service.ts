import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { AuthService } from '../auth.service';
import { ConfirmationDto } from './dto/confirmation.dto';
import {
    BadRequestException,
    forwardRef,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class EmailConfirmationService {
    private readonly TOKEN_EXPIRATION_MS = 3600 * 1000; // 1 час

    public constructor(
        private readonly prismaService: PrismaService,
        private readonly mailService: MailService,
        private readonly userService: UserService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
    ) {}

    public async newVerification(req: Request, res: Response, dto: ConfirmationDto) {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                token: dto.token,
                type: TokenType.VERIFICATION,
            },
        });

        if (!existingToken) {
            throw new NotFoundException(
                'The confirmation token was not found. Please make sure that you have the correct token.',
            );
        }

        const hasExpired = new Date(existingToken.expiresIn) < new Date();

        if (hasExpired) {
            throw new BadRequestException(
                'The confirmation token has expired. Please request a new token for confirmation.',
            );
        }

        const existingUser = await this.userService.findByEmail(
            existingToken.email,
        );

        if (!existingUser) {
            throw new NotFoundException(
                'The user was not found. Please check the email address you entered and try again.',
            );
        }

        await this.prismaService.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                isVerified: true,
            },
        });

        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
            },
        });

        return this.authService.saveSession(req, res, existingUser);
    }

    public async sendVerificationToken(email: string) {
        const verificationToken = await this.generateVerificationToken(email);

        await this.mailService.sendConfirmationEmail(
            verificationToken.email,
            verificationToken.token,
        );

        return true;
    }

    public async generateVerificationToken(email: string) {
        const token = uuidv4();

        const expiresIn = new Date(
            new Date().getTime() + this.TOKEN_EXPIRATION_MS,
        );

        await this.prismaService.token.deleteMany({
            where: { email, type: TokenType.VERIFICATION },
        });

        const verificationToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.VERIFICATION,
            },
        });

        return verificationToken;
    }
}
