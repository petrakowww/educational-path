import { JwtModule } from '@/auth/jwt/jwt.module';

import { AccountService } from './account/account.service';
import { SkillProfileService } from './skill-profile/skill-profile.service';
import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SkillProfileResolver } from './skill-profile/skill-profile.resolver';

@Module({
    controllers: [UserController],
    imports: [JwtModule],
    providers: [
        UserResolver,
        UserService,
        AccountService,
        SkillProfileService,
        SkillProfileResolver,
    ],
})
export class UserModule {}
