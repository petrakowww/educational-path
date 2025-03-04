import { Request, Response } from 'express';

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
import { ConfigService } from '@nestjs/config';
import { Recaptcha } from '@nestlab/google-recaptcha';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    public constructor(
        private readonly authService: AuthService,
        private readonly providerService: ProviderService,
        private readonly configService: ConfigService,
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
    public async login(@Req() req: Request, @Body() dto: LoginDto) {
        return this.authService.login(req, dto);
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

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    public async logout(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        return this.authService.logout(req, res);
    }
}
