import { hash, verify } from 'argon2';

import { UserService } from '../user.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/__generated__';

@Injectable()
export class UserPasswordService {
    public constructor(private readonly userService: UserService) {}

    public async newPassword(user: User, dto: ChangePasswordDto) {
        if (user.password) {
            if (!dto.oldPassword) {
                throw new BadRequestException('Введите старый пароль.');
            }

            try {
                const isMatch = await verify(user.password, dto.oldPassword);
                if (!isMatch) {
                    throw new BadRequestException('Неверный старый пароль.');
                }
            } catch {
                throw new BadRequestException('Ошибка при проверке пароля.');
            }
        } else {
            if (dto.oldPassword) {
                throw new BadRequestException('У вас нет старого пароля.');
            }
        }

        if (dto.oldPassword === dto.newPassword) {
            throw new BadRequestException(
                'Новый пароль не может совпадать со старым.',
            );
        }

        try {
            console.log(user.id);
            const hashedPassword = await hash(dto.newPassword);
            await this.userService.update(user.id, {
                password: hashedPassword,
            });

            return { message: 'Пароль был успешно изменён!' };
        } catch (err) {
            console.log(err);
            throw new BadRequestException('Ошибка при обновлении пароля.');
        }
    }
}
