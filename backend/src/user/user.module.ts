import { AuthModule } from '@/auth/auth.module';
import { TokenService } from '@/auth/tokens/token.service';
import { TwoFactorAuthService } from '@/auth/two-factor-auth/two-factor-auth.service';
import { MailService } from '@/libs/mail/mail.service';

import { UserAccountService } from './account/user-account.service';
import { AvatarService } from './avatar/avatar.service';
import { UserEmailService } from './email/email.service';
import { UserOAuthAccountService } from './oauth-account/account.service';
import { UserPasswordService } from './password/password.service';
import { UserSkillProfileResolver } from './skill-profile/skill-profile.resolver';
import { UserSkillProfileService } from './skill-profile/skill-profile.service';
import { forwardRef, Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { JwtService } from '@/auth/jwt/jwt.service';
import { RedisService } from '@/auth/redis/redis.service';
import { AvatarModule } from './avatar/avatar.module';

@Module({
    imports: [forwardRef(() => AuthModule), AvatarModule],
    providers: [
        TwoFactorAuthService,
        MailService,
        TokenService,
        AvatarService,
        JwtService,
        RedisService,
        UserResolver,
        UserService,
        UserOAuthAccountService,
        UserSkillProfileResolver,
        UserEmailService,
        UserSkillProfileService,
        UserPasswordService,
        UserAccountService,
    ],
    exports: [
        UserService,
        UserOAuthAccountService,
        UserSkillProfileResolver,
        UserEmailService,
        UserSkillProfileService,
        UserPasswordService,
        UserAccountService,
    ],
    controllers: [UserController],
})
export class UserModule {}
