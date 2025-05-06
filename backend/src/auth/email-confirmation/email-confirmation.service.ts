import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';

import { TokenService } from '../tokens/token.service';
import { ConfirmationDto } from './dto/confirmation.dto';
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { TokenType } from '@prisma/__generated__';

@Injectable()
export class EmailConfirmationService {
    public constructor(
        private readonly mailService: MailService,
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
    ) {}

    public async sendVerificationToken(userId: string, email: string) {
        const verificationToken = await this.tokenService.generateToken(
            userId,
            email,
            TokenType.VERIFICATION,
        );

        await this.mailService.sendConfirmationEmail(
            verificationToken.email,
            verificationToken.token,
        );
        return true;
    }

    public async newVerification(dto: ConfirmationDto) {
        const tokenData = await this.tokenService.findToken(
            dto.token,
            TokenType.VERIFICATION,
        );

        if (!tokenData) {
            throw new NotFoundException(
                'Токен подтверждения не найден. Пожалуйста, убедитесь, что у вас правильный токен.',
            );
        }

        const hasExpired = new Date(tokenData.expiresIn) < new Date();

        if (hasExpired) {
            throw new BadRequestException(
                'Срок действия токена подтверждения истек. Пожалуйста, запросите новый токен для подтверждения.',
            );
        }

        const user = await this.userService.findById(tokenData.userId);

        if (!user) {
            throw new NotFoundException(
                'Пользователь не найден. Пожалуйста, проверьте введенный вами адрес электронной почты и повторите попытку.',
            );
        }

        await this.userService.update(user.id, { isVerified: true });

        await this.tokenService.deleteToken(tokenData.id);

        return user;
    }
}
