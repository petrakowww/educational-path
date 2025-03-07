import { verify } from 'argon2';
import { Request, Response } from 'express';

import { ExtendAuthCookieRequest } from '@/config/types/context-request.type';
import { UserService } from '@/user/user.service';

import { AccountService } from './account/account.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { JwtService } from './jwt/jwt.service';
import { ProviderService } from './provider/provider.service';
import { OAuthLoginResult } from './provider/services/types/user-info.type';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import {
    ConflictException,
    forwardRef,
    Inject,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthMethod, User } from '@prisma/__generated__';

@Injectable()
export class AuthService {
    private readonly ALLOWED_ORIGIN: string;
    private readonly FRONTEND_2FA_URL: string;
    private readonly FRONTEND_REDIRECT_URL: string;
    public constructor(
        private readonly userService: UserService,
        private readonly accountService: AccountService,
        private readonly configService: ConfigService,
        private readonly providerService: ProviderService,
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => EmailConfirmationService))
        private readonly emailConfirmationService: EmailConfirmationService,
        @Inject(forwardRef(() => TwoFactorAuthService))
        private readonly twoFactorAuthService: TwoFactorAuthService,
    ) {
        this.ALLOWED_ORIGIN =
            this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
        this.FRONTEND_2FA_URL =
            this.configService.getOrThrow<string>('FRONTEND_2FA_URL');
        this.FRONTEND_REDIRECT_URL = this.configService.getOrThrow<string>(
            'FRONTEND_REDIRECT_URL',
        );
    }
    public async register(dto: RegisterDto) {
        const existingEmail = await this.userService.findByEmail(dto.email);

        if (existingEmail) {
            throw new ConflictException(
                'Registration failed. A user with this email already exists, please use another email.',
            );
        }

        const newUser = await this.userService.create({
            name: dto.name,
            email: dto.email,
            password: dto.password,
            picture: '',
            method: AuthMethod.CREDENTIALS,
            isVerified: false,
        });

        await this.emailConfirmationService.sendVerificationToken(
            newUser.email,
        );

        return {
            message:
                'You have successfully registered. Please confirm your email address. The message has been sent to your email address.',
        };
    }

    public async login(res: Response, dto: LoginDto) {
        const user = await this.userService.findByEmail(dto.email);

        if (!user || !user.password) {
            throw new NotFoundException(
                'The user was not found, please check the entered data.',
            );
        }

        const isValidPassword = await verify(user.password, dto.password);

        if (!isValidPassword) {
            throw new UnauthorizedException(
                'Invalid password, please check the password you entered and try again.',
            );
        }

        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(
                user.email,
            );
            throw new UnauthorizedException(
                'Your email has not been verified. Please check your email and confirm the address.',
            );
        }

        if (user.isTwoFactorEnabled) {
            if (!dto.code) {
                await this.twoFactorAuthService.sendTwoFactorToken(user.email);

                return {
                    message:
                        'Check your email. A two-factor authentication code is required.',
                    otpResponse: true,
                };
            }

            await this.twoFactorAuthService.validateTwoFactorToken(
                user.email,
                dto.code,
            );
        }

        await this.issueTokens(res, user);
    }

    public async extractProfileFromCode(
        req: Request,
        res: Response,
        provider: string,
        code: string,
    ): Promise<OAuthLoginResult> {
        const providerInstance = this.providerService.findByService(provider);

        if (!providerInstance) {
            throw new Error(`OAuth provider '${provider}' not found.`);
        }

        try {
            const profile = await providerInstance.exchangeAccessCode(code);

            const account = await this.accountService.findOAuthAccount(
                profile.accountId,
                profile.provider,
            );

            let user: User;

            if (account) {
                user = await this.userService.findById(account.userId);

                if (!user) {
                    throw new NotFoundException(
                        'The user was not found for this account.',
                    );
                }
                await this.accountService.updateOAuthAccountTokens(profile);
            } else {
                if (profile.email) {
                    user = await this.userService.findByEmail(profile.email);
                }

                if (!user) {
                    user = await this.userService.create({
                        email: profile.email,
                        password: '',
                        name: profile.name,
                        method: profile.provider,
                        isVerified: true,
                        picture: profile.picture,
                    });
                }

                await this.accountService.createOAuthAccount(user.id, profile);
            }

            if (user.isTwoFactorEnabled) {
                const oauthToken =
                    (await this.twoFactorAuthService.sendTwoFactorToken(
                        user.email,
                        true,
                    )) as string;
                return {
                    requires2FA: true,
                    oauthToken: oauthToken,
                    email: profile.email,
                    message:
                        'A two-factor authentication code was sent to your email.',
                };
            }

            await this.issueTokens(res, user);
            return { requires2FA: false };
    } catch {
            res.redirect(`${this.ALLOWED_ORIGIN}/auth/signin`);
        }
    }

    public async handleOAuthResult(
        req: Request,
        res: Response,
        provider: string,
        code: string,
    ): Promise<string> {
        const result = await this.extractProfileFromCode(
            req,
            res,
            provider,
            code,
        );

        if ('requires2FA' in result && result.requires2FA) {
            const oauthToken =
                await this.twoFactorAuthService.sendTwoFactorToken(
                    result.email,
                    true,
                );
            return `${this.ALLOWED_ORIGIN}${this.FRONTEND_2FA_URL}?oua=${oauthToken}`;
        }
        return `${this.ALLOWED_ORIGIN}${this.FRONTEND_REDIRECT_URL}`;
    }

    public async logout(req: Request, res: Response): Promise<void> {
        await this.jwtService.logout(req, res);
    }

    public async issueTokens(res: Response, user: User) {
        const payload = { userId: user.id, sessionId: user.id };
        const accessToken = this.jwtService.generateAccessToken(payload);
        const refreshToken =
            await this.jwtService.generateRefreshToken(payload);

        this.jwtService.setTokenCookie(res, accessToken, false);
        this.jwtService.setTokenCookie(res, refreshToken, true);

        return { accessToken, refreshToken };
    }

    public async refreshTokens(req: ExtendAuthCookieRequest, res: Response) {
        return await this.jwtService.validateOrRefreshAccessToken(req, res);
    }
}
