import { JwtModule } from '@/auth/jwt/jwt.module';

import { AccountService } from './account/account.service';
import { SkillProfileResolver } from './skill-profile/skill-profile.resolver';
import { SkillProfileService } from './skill-profile/skill-profile.service';
import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [JwtModule],
    providers: [
        UserResolver,
        UserService,
        AccountService,
        SkillProfileService,
        SkillProfileResolver,
    ],
    exports: [UserService],
})
export class UserModule {}
