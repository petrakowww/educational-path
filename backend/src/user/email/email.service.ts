import { TwoFactorAuthService } from '@/auth/two-factor-auth/two-factor-auth.service';

import { UserService } from '../user.service';
import { EmailDto } from './dto/email.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { TokenType, User } from '@prisma/__generated__';

@Injectable()
export class EmailService {
    constructor(
        private readonly userService: UserService,
        private readonly twoFactorAuthService: TwoFactorAuthService,
    ) {}

    public async handleEmailChange(user: User, dto: EmailDto) {
        if (dto.code) {
            return this.verifyNewEmail(user, dto);
        }
        return this.requestEmailChange(user, dto);
    }

    private async requestEmailChange(user: User, dto: EmailDto) {
        const { oldEmail, newEmail } = dto;

        if (!user.password) {
            throw new BadRequestException(
                'Вы не можете сменить почту, пока не установите пароль.',
            );
        }

        if (oldEmail !== user.email) {
            throw new BadRequestException('Старый email указан неверно.');
        }

        if (newEmail === user.email) {
            throw new BadRequestException(
                'Новый email не может совпадать с текущим.',
            );
        }

        const existingUser = await this.userService.findByEmail(newEmail);
        if (existingUser) {
            throw new BadRequestException(
                'Этот email уже используется другим аккаунтом.',
            );
        }

        await this.twoFactorAuthService.sendTwoFactorToken(
            newEmail,
            TokenType.CHANGE_EMAIL,
        );

        return {
            status: 0,
            message: 'Код подтверждения отправлен на новый email.',
            email: newEmail,
        };
    }

    private async verifyNewEmail(user: User, dto: EmailDto) {
        await this.twoFactorAuthService.validateTwoFactorToken(
            dto.newEmail,
            TokenType.CHANGE_EMAIL,
            dto.code,
        );

        await this.userService.update(user.id, { email: dto.newEmail });

        return {
            status: 1,
            message: 'Email успешно изменен.',
            email: dto.newEmail,
        };
    }
}
