import { Response, Request } from 'express';

import { AuthService } from '@/auth/auth.service';

import { AvatarService } from '../avatar/avatar.service';
import { UserService } from '../user.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/__generated__';

@Injectable()
export class UserAccountService {
    public constructor(
        private readonly userService: UserService,
        private readonly avatarService: AvatarService,
        private readonly authService: AuthService,
    ) {}

    public async deleteAccount(user: User, req: Request, res: Response) {
        try {
            await this.avatarService.deleteAvatar(user);
        } catch (error) {
            console.warn(
                `Не удалось удалить аватар пользователя ${user.id}: ${(error as Error).message}`,
            );
        }

        await this.authService.logout(req, res);

        await this.userService.delete(user.id);

        return { message: 'Аккаунт успешно удалён' };
    }
}
