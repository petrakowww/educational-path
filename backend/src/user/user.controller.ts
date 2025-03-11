import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Delete,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UserService } from './user.service';
import { User } from '@prisma/__generated__';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authorization()
    @Post('upload-avatar')
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.OK)
    public async uploadAvatar(
        @CurrentUser() user: User,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const updatedUser = await this.userService.updateAvatar(user, file);
        return updatedUser;
    }

    @Authorization()
    @Delete('delete-avatar')
    @HttpCode(HttpStatus.OK)
    public async deleteAvatar(
        @CurrentUser() user: User,
    ) {
        const updatedUser = await this.userService.deleteAvatar(user);
        return updatedUser;
    }
}
