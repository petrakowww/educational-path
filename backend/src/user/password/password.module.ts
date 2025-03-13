import { AuthSharedModule } from '@/auth/auth.module';

import { UserService } from '../user.service';
import { Module } from '@nestjs/common';

import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';

@Module({
    imports: [AuthSharedModule],
    controllers: [PasswordController],
    providers: [UserService, PasswordService],
})
export class PasswordModule {}
