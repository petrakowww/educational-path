import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import {
    Controller,
    Delete,
    HttpCode,
    HttpStatus,
    Patch,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '@prisma/__generated__';
import { AvatarService } from './avatar.service';

@Controller('avatars')
@Authorization()
export class AvatarController {
    public constructor(private readonly avatarService: AvatarService) {}

    @Patch('update')
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.OK)
    public async updateAvatar(
        @CurrentUser() user: User,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.avatarService.updateAvatar(user, file);
    }

    @Delete('delete')
    @HttpCode(HttpStatus.OK)
    public async deleteAvatar(@CurrentUser() user: User) {
        return await this.avatarService.deleteAvatar(user);
    }
}
