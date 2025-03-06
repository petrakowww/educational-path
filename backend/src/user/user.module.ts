import { JwtModule } from '@/auth/jwt/jwt.module';

import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [JwtModule],
    providers: [UserResolver, UserService],
})
export class UserModule {}
