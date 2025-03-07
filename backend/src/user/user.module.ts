import { JwtModule } from '@/auth/jwt/jwt.module';

import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [JwtModule],
    providers: [UserResolver, UserService],
    controllers: [UserController],
})
export class UserModule {}
