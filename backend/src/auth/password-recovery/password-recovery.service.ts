import { hash } from 'argon2';
import { v4 as uuidv4 } from 'uuid';

import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { NewPasswordDto } from './dto/new-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class PasswordRecoveryService {
    private readonly TOKEN_EXPIRATION_MS = 3600 * 1000; // 1 час

    public constructor(
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
        private readonly mailService: MailService,
    ) {}

    public async resetPassword(dto: ResetPasswordDto) {
        const existingUser = await this.userService.findByEmail(dto.email);

        if (!existingUser) {
            throw new NotFoundException(
                'Пользователь не найден. Пожалуйста, проверьте введенный вами адрес электронной почты и повторите попытку.',
            );
        }

        const passwordResetToken = await this.generatePasswordResetToken(
            existingUser.email,
        );

        await this.mailService.sendPasswordResetEmail(
            passwordResetToken.email,
            passwordResetToken.token,
        );

        return true;
    }

    public async newPassword(dto: NewPasswordDto, token: string) {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                token: token,
                type: TokenType.PASSWORD_RESET,
            },
        });

        if (!existingToken) {
            throw new NotFoundException(
                'Токен не найден. Пожалуйста, проверьте правильность введенного токена или запросите новый.',
            );
        }

        const hasExpired = new Date(existingToken.expiresIn) < new Date();

        if (hasExpired) {
            throw new BadRequestException(
                'Срок действия токена истек. Пожалуйста, запросите новый токен для подтверждения сброса пароля.',
            );
        }

        const existingUser = await this.userService.findByEmail(
            existingToken.email,
        );

        if (!existingUser) {
            throw new NotFoundException(
                'Пользователь не найден. Пожалуйста, проверьте введенный вами адрес электронной почты и повторите попытку.',
            );
        }

        await this.prismaService.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                password: await hash(dto.password),
            },
        });

        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: TokenType.PASSWORD_RESET,
            },
        });

        return true;
    }

    private async generatePasswordResetToken(email: string) {
        const token = uuidv4();
        const expiresIn = new Date(
            new Date().getTime() + this.TOKEN_EXPIRATION_MS,
        );

        await this.prismaService.token.deleteMany({
            where: { email, type: TokenType.PASSWORD_RESET },
        });

        const passwordResetToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.PASSWORD_RESET,
            },
        });

        return passwordResetToken;
    }
}
