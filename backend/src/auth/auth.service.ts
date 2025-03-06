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
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthMethod, User } from '@prisma/__generated__';

@Injectable()
export class AuthService {
    private readonly SESSION_NAME: string;
    public constructor(
        private readonly userService: UserService,
        private readonly accountService: AccountService,
        private readonly configService: ConfigService,
        private readonly providerService: ProviderService,
        @Inject(forwardRef(() => EmailConfirmationService))
        private readonly emailConfirmationService: EmailConfirmationService,
        @Inject(forwardRef(() => TwoFactorAuthService))
        private readonly twoFactorAuthService: TwoFactorAuthService,
    ) {
        this.SESSION_NAME = configService.getOrThrow<string>('SESSION_NAME');
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

    public async login(req: Request, res: Response, dto: LoginDto) {
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

        await this.saveSession(req, res, user);
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

        await this.saveSession(req, res, user);
        return { requires2FA: false };
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
        const frontendUrl =
            this.configService.getOrThrow<string>('ALLOWED_ORIGIN');

        if ('requires2FA' in result && result.requires2FA) {
            const oauthToken =
                await this.twoFactorAuthService.sendTwoFactorToken(
                    result.email,
                    true,
                );
            const frontendRedirectPath =
                this.configService.getOrThrow<string>('FRONTEND_2FA_URL');
            return `${frontendUrl}${frontendRedirectPath}?oua=${oauthToken}`;
        }

        const frontendRedirectPath = this.configService.getOrThrow<string>(
            'FRONTEND_REDIRECT_URL',
        );
        return `${frontendUrl}${frontendRedirectPath}`;
    }

    public async logout(req: Request, res: Response): Promise<void> {
        return new Promise((resolve, reject) => {
            req.session.destroy(err => {
                if (err) {
                    return reject(
                        new InternalServerErrorException(
                            'Failed to end the session. There may be a problem with the server or the session has already been completed.',
                        ),
                    );
                }
                res.clearCookie(this.SESSION_NAME);
                // this.jwtService.clearTokenCookie(res);
                resolve();
            });
        });
    }

    public async saveSession(req: Request, res: Response, user: User) {
        req.session.userId = user.id;

        return new Promise<void>((resolve, reject) => {
            req.session.save(err => {
                if (err) {
                    reject(
                        new InternalServerErrorException(
                            "Couldn't save session",
                        ),
                    );
                }
                resolve();
            });
        });
    }

    public updateAuthorizationSession(
        req: ExtendAuthCookieRequest,
        res: Response,
    ) {
        // const session: string | undefined = req.cookies?.session;
        // const accessToken: string | undefined = req.cookies?.at;
        // if (!session) {
        //     if (accessToken) {
        //         this.jwtService.clearTokenCookie(res);
        //     }
        //     throw new UnauthorizedException('The user is not logged in');
        // }
        // if (!req.session?.userId) {
        //     if (accessToken) {
        //         this.jwtService.clearTokenCookie(res);
        //     }
        //     res.clearCookie(this.SESSION_NAME);
        //     throw new UnauthorizedException('Session is invalid or expired.');
        // }
        // this.jwtService.generatePublicJWTAuthToken(
        //     {
        //         sessionId: req.session.id,
        //     },
        //     res,
        // );
        // return {
        //     status: true,
        //     message: 'Session has been successfully set up.',
        // };
    }
}
