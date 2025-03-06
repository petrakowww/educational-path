import { Request } from 'express';

import { TwoFactorDto } from './dto/two-factor.dto';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Req,
} from '@nestjs/common';
import { Recaptcha } from '@nestlab/google-recaptcha';

import { TwoFactorAuthService } from './two-factor-auth.service';

@Controller('auth/twa')
export class TwoFactorAuthController {
    constructor(private readonly twoFactourAuthService: TwoFactorAuthService) {}

    @Recaptcha()
    @Post('/oauth/:oua')
    @HttpCode(HttpStatus.OK)
    public async newVerification(
        @Req() req: Request,
        @Body() dto: TwoFactorDto,
        @Param('oua') ouaToken: string,
    ) {
        return await this.twoFactourAuthService.verifyTwoFactorAuthentication(
            req,
            dto,
            ouaToken,
        );
    }
}
