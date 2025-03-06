import { Request, Response } from 'express';

import { TwoFactorDto } from './dto/two-factor.dto';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Req,
    Res,
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
        @Res() res: Response,
        @Body() dto: TwoFactorDto,
        @Param('oua') ouaToken: string,
    ) {
        return await this.twoFactourAuthService.verifyTwoFactorAuthentication(
            req,
            res,
            dto,
            ouaToken,
        );
    }
}
