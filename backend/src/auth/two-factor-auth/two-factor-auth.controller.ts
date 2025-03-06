import { Response } from 'express';

import { TwoFactorDto } from './dto/two-factor.dto';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
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
        @Res() res: Response,
        @Body() dto: TwoFactorDto,
        @Param('oua') ouaToken: string,
    ) {
        const result =
            await this.twoFactourAuthService.verifyTwoFactorAuthentication(
                res,
                dto,
                ouaToken,
            );
        return res.status(HttpStatus.OK).json(result);
    }
}
