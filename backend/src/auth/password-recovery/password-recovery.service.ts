import { hash } from 'argon2';

import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { TokenService } from '../tokens/token.service';
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
    public constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
        private readonly mailService: MailService,
    ) {}

    public async resetPassword(dto: ResetPasswordDto) {
        const user = await this.userService.findByEmail(dto.email);

        if (!user) {
            throw new NotFoundException(
                'Пользователь не найден. Пожалуйста, проверьте введенный вами адрес электронной почты и повторите попытку.',
            );
        }

        const resetToken = await this.tokenService.generateToken(
            user.email,
            TokenType.PASSWORD_RESET,
        );

        await this.mailService.sendPasswordResetEmail(
            resetToken.email,
            resetToken.token,
        );

        return true;
    }

    public async newPassword(dto: NewPasswordDto, token: string) {
        const tokenData = await this.tokenService.findToken(
            token,
            TokenType.PASSWORD_RESET,
        );

        if (!tokenData) {
            throw new NotFoundException(
                'Токен не найден. Пожалуйста, проверьте правильность введенного токена или запросите новый.',
            );
        }

        const hasExpired = new Date(tokenData.expiresIn) < new Date();

        if (hasExpired) {
            throw new BadRequestException(
                'Срок действия токена истек. Пожалуйста, запросите новый токен для подтверждения сброса пароля.',
            );
        }

        const user = await this.userService.findByEmail(tokenData.email);

        if (!user) {
            throw new NotFoundException(
                'Пользователь не найден. Пожалуйста, проверьте введенный вами адрес электронной почты и повторите попытку.',
            );
        }

        await this.userService.update(user.id, {
            password: await hash(dto.password),
        });

        await this.tokenService.deleteToken(tokenData.id);

        return { message: 'Пароль был успешно изменён!' };
    }
}
