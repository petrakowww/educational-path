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

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authorization()
    @Post('upload-avatar')
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.OK)
    public async uploadAvatar(
        @CurrentUser('id') userId: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const updatedUser = await this.userService.updateAvatar(userId, file);
        return updatedUser;
    }

@Authorization()
    @Delete('delete-avatar')
    @HttpCode(HttpStatus.OK)
    public async deleteAvatar(
        @CurrentUser('id') userId: string,
    ) {
        const updatedUser = await this.userService.deleteAvatar(userId);
        return updatedUser;
    }
}
