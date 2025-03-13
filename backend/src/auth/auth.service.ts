import { verify } from 'argon2';
import { Request, Response } from 'express';

import { UserService } from '@/user/user.service';

import { UserOAuthAccountService } from '../user/oauth-account/account.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ConfirmationDto } from './email-confirmation/dto/confirmation.dto';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { JwtService } from './jwt/jwt.service';
import { ProviderService } from './provider/provider.service';
import { OAuthLoginResult } from './provider/services/types/user-info.type';
import { TokenService } from './tokens/token.service';
import { TwoFactorDto } from './two-factor-auth/dto/two-factor.dto';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import {
    BadRequestException,
    ConflictException,
    forwardRef,
    Inject,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthMethod, TokenType, User } from '@prisma/__generated__';

@Injectable()
export class AuthService {
    private readonly ALLOWED_ORIGIN: string;
    private readonly FRONTEND_2FA_URL: string;
    private readonly FRONTEND_REDIRECT_URL: string;
    public constructor(
        private readonly userService: UserService,
        private readonly accountService: UserOAuthAccountService,
        private readonly configService: ConfigService,
        private readonly providerService: ProviderService,
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => EmailConfirmationService))
        private readonly emailConfirmationService: EmailConfirmationService,
        @Inject(forwardRef(() => TwoFactorAuthService))
        private readonly twoFactorAuthService: TwoFactorAuthService,
        private readonly tokenService: TokenService,
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
                'Не удалось зарегистрироваться. Пользователь с таким адресом электронной почты уже существует, пожалуйста, используйте другой адрес электронной почты.',
            );
        }

        const newUser = await this.userService.create({
            name: dto.name,
            email: dto.email,
            password: dto.password,
            avatar: '',
            method: AuthMethod.CREDENTIALS,
            isVerified: false,
        });

        await this.emailConfirmationService.sendVerificationToken(
            newUser.email,
        );

        return {
            message:
                'Вы успешно зарегистрировались. Пожалуйста, подтвердите свой адрес электронной почты. Сообщение было отправлено на ваш электронный адрес.',
        };
    }

    public async login(res: Response, dto: LoginDto) {
        const user = await this.userService.findByEmail(dto.email);

        if (!user || !user.password) {
            throw new NotFoundException(
                'Пользователь не найден, пожалуйста, проверьте введенные данные.',
            );
        }

        const isValidPassword = await verify(user.password, dto.password);

        if (!isValidPassword) {
            throw new UnauthorizedException(
                'Неверный пароль, пожалуйста, проверьте введенный вами пароль и повторите попытку.',
            );
        }

        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(
                user.email,
            );
            throw new UnauthorizedException(
                'Ваш адрес электронной почты не был подтвержден. Пожалуйста, проверьте свой адрес электронной почты и подтвердите указанный адрес.',
            );
        }

        if (user.isTwoFactorEnabled) {
            if (!dto.code) {
                await this.twoFactorAuthService.sendTwoFactorToken(
                    user.email,
                    TokenType.TWO_FACTOR,
                );

                return {
                    message:
                        'Проверьте свою электронную почту. Требуется ввести код двухфакторной аутентификации.',
                    otpResponse: true,
                };
            }

            await this.twoFactorAuthService.validateTwoFactorToken(
                user.email,
                TokenType.TWO_FACTOR,
                dto.code,
            );
        }

        await this.generateJwtTokens(res, user);
    }

    public async verifyOAuthTwoFactorAuthentication(
        res: Response,
        dto: TwoFactorDto,
        oauthToken: string,
    ) {
        if (!oauthToken) {
            throw new BadRequestException('Отсутствует токен OAuth.');
        }

        const token = await this.tokenService.findByOAuth(
            oauthToken,
            TokenType.TWO_FACTOR,
        );

        if (!token) {
            throw new BadRequestException('Неверный код аутентификации.');
        }

        const isValid = await this.twoFactorAuthService.validateTwoFactorToken(
            token.email,
            TokenType.TWO_FACTOR,
            dto.code,
        );
        if (!isValid) {
            throw new BadRequestException('Неверный код аутентификации.');
        }

        const user = await this.userService.findByEmail(token.email);
        if (!user) {
            throw new NotFoundException('Пользователь не найден.');
        }

        return this.generateJwtTokens(res, user);
    }

    public async verifyEmailAuthentication(
        res: Response,
        dto: ConfirmationDto,
    ) {
        const user = await this.emailConfirmationService.newVerification(dto);

        return this.generateJwtTokens(res, user);
    }

    public async extractProfileFromCode(
        req: Request,
        res: Response,
        provider: string,
        code: string,
    ): Promise<OAuthLoginResult> {
        const providerInstance = this.providerService.findByService(provider);

        if (!providerInstance) {
            throw new Error(`Поставщик OAuth '${provider}' не был найден.`);
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
                        'Пользователь для этой учетной записи найден не был.',
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
                        avatar: profile.avatar,
                        githubUrl: profile.github_url,
                    });
                }

                await this.accountService.createOAuthAccount(user.id, profile);
            }

            if (user.isTwoFactorEnabled) {
                const oauthToken =
                    await this.twoFactorAuthService.sendTwoFactorAuthToken(
                        user.email,
                        TokenType.TWO_FACTOR,
                    );
                return {
                    requires2FA: true,
                    oauthToken: oauthToken,
                    email: profile.email,
                    message:
                        'На ваш электронный адрес был отправлен код двухфакторной аутентификации.',
                };
            }

            await this.generateJwtTokens(res, user);
            return { requires2FA: false };
        } catch {
            return {
                oauthErrorMessage:
                    'Ошибка на стороне службы авторизации. Пожалуйста, попробуйте снова',
            };
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
        if (!code) {
            throw new BadRequestException(
                'Код авторизации предоставлен не был.',
            );
        }

        if ('requires2FA' in result && result.requires2FA) {
            const oauthToken =
                await this.twoFactorAuthService.sendTwoFactorAuthToken(
                    result.email,
                    TokenType.TWO_FACTOR,
                );

            return `${this.ALLOWED_ORIGIN}${this.FRONTEND_2FA_URL}?oua=${oauthToken}`;
        }
        return `${this.ALLOWED_ORIGIN}${this.FRONTEND_REDIRECT_URL}`;
    }

    public async logout(req: Request, res: Response): Promise<void> {
        await this.jwtService.logout(req, res);
    }

    public async generateJwtTokens(res: Response, user: User) {
        const payload = { userId: user.id, sessionId: user.id };
        const accessToken = this.jwtService.generateAccessToken(payload);
        const refreshToken =
            await this.jwtService.generateRefreshToken(payload);

        this.jwtService.setTokenCookie(res, accessToken, 'Access Token');
        this.jwtService.setTokenCookie(res, refreshToken, 'Refresh Token');

        return { accessToken, refreshToken };
    }

    public async refreshJwtTokens(req: Request, res: Response) {
        const oldAccessToken = this.jwtService.getToken(req, 'Access Token');

        if (oldAccessToken) {
            try {
                this.jwtService.verifyAccessToken(oldAccessToken);
                this.jwtService.setTokenCookie(
                    res,
                    oldAccessToken,
                    'Access Token',
                );

                return { accessToken: oldAccessToken };
            } catch {
                console.warn(
                    'Недействительный токен доступа, попытка обновления...',
                );
            }
        }
        const { accessToken, refreshToken } =
            await this.jwtService.refreshTokens(req);

        this.jwtService.setTokenCookie(res, accessToken, 'Access Token');
        this.jwtService.setTokenCookie(res, refreshToken, 'Refresh Token');

        return { accessToken, refreshToken };
    }
}
