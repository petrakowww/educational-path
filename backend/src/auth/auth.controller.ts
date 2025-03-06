import { Request, Response } from 'express';

import { ExtendAuthCookieRequest } from '@/config/types/context-request.type';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthProviderGuard } from './guard/provider.guard';
import { ProviderService } from './provider/provider.service';
import {
    BadRequestException,
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

@Controller('auth')
export class AuthController {
    public constructor(
        private readonly authService: AuthService,
        private readonly providerService: ProviderService,
    ) {}

    @Recaptcha()
    @Post('register')
    @HttpCode(HttpStatus.OK)
    public async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Recaptcha()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    public async login(@Res() res: Response, @Body() dto: LoginDto) {
        const result = await this.authService.login(res, dto);
        return res.status(HttpStatus.OK).json(result);
    }

    @UseGuards(AuthProviderGuard)
    @Get('/oauth/callback/:provider')
    public async callback(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
        @Query('code') code: string,
        @Param('provider') provider: string,
    ) {
        if (!code) {
            throw new BadRequestException(
                'Authorization code was not provided.',
            );
        }

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

    @Post('refresh-tokens')
    @HttpCode(HttpStatus.OK)
    public async refreshTokens(
        @Req() req: ExtendAuthCookieRequest,
        @Res() res: Response,
    ) {
        await this.authService.refreshTokens(req, res);
        return res
            .status(HttpStatus.OK)
            .json({ message: 'Successfully update tokens' });
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    public async logout(@Req() req: Request, @Res() res: Response) {
        await this.authService.logout(req, res);
        return res
            .status(HttpStatus.OK)
            .json({ message: 'Successfully logged out' });
    }
}
