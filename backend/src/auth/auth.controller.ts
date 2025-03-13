import { Request, Response } from 'express';

import { UserRequest } from '@/config/types/context-request.type';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthProviderGuard } from './guard/provider.guard';
import { ProviderService } from './provider/provider.service';
import { TwoFactorDto } from './two-factor-auth/dto/two-factor.dto';
import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Query,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { Recaptcha } from '@nestlab/google-recaptcha';

import { AuthService } from './auth.service';
import { ConfirmationDto } from './email-confirmation/dto/confirmation.dto';

@Controller('/auth')
export class AuthController {
    public constructor(
        private readonly authService: AuthService,
        private readonly providerService: ProviderService,
    ) {}

    @Recaptcha()
    @Post('/register')
    @HttpCode(HttpStatus.OK)
    public async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Recaptcha()
    @Post('/login')
    public async login(@Res() res: Response, @Body() dto: LoginDto) {
        const result = await this.authService.login(res, dto);
        return res.status(HttpStatus.OK).json(result);
    }

    @Recaptcha()
    @Post('/oauth/twa/:oua')
    public async newOAuthVerification(
        @Res() res: Response,
        @Body() dto: TwoFactorDto,
        @Param('oua') ouaToken: string,
    ) {
        const result =
            await this.authService.verifyOAuthTwoFactorAuthentication(
                res,
                dto,
                ouaToken,
            );
        return res.status(HttpStatus.OK).json(result);
    }

    @Post('/email-confirmation')
    public async newEmailVerification(
        @Res() res: Response,
        @Body() dto: ConfirmationDto,
    ) {
        const tokens = await this.authService.verifyEmailAuthentication(
            res,
            dto,
        );
        return res.status(HttpStatus.OK).json(tokens);
    }

    @UseGuards(AuthProviderGuard)
    @Get('/oauth/callback/:provider')
    public async callback(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
        @Query('code') code: string,
        @Param('provider') provider: string,
    ) {
        
        const redirectUrl = await this.authService.handleOAuthResult(
            req,
            res,
            provider,
            code,
        );

        return res.redirect(redirectUrl);
    }

    @UseGuards(AuthProviderGuard)
    @Get('/oauth/connect/:provider')
    public connectOAuth(@Param('provider') provider: string) {
        const providerInstance = this.providerService.findByService(provider);

        return {
            url: providerInstance.loginRequestUrl(),
        };
    }

    @Get('/refresh-tokens')
    public async refreshTokens(@Req() req: UserRequest, @Res() res: Response) {
        const response = await this.authService.refreshJwtTokens(req, res);
        return res.status(HttpStatus.OK).json(response);
    }

    @Post('/logout')
    public async logout(@Req() req: Request, @Res() res: Response) {
        await this.authService.logout(req, res);
        return res
            .status(HttpStatus.OK)
            .json({ message: 'Успешно вышел из системы.' });
    }
}
