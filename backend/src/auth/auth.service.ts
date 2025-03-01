import { verify } from 'argon2';
import { Request, Response } from 'express';

import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { ProviderService } from './provider/provider.service';
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
    public constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        private readonly providerService: ProviderService,
        private readonly prismaService: PrismaService,
        @Inject(forwardRef(() => EmailConfirmationService))
        private readonly emailConfirmationService: EmailConfirmationService,
    ) {}
    public async register(req: Request, dto: RegisterDto) {
        const isExistsEmail = await this.userService.findByEmail(dto.email);

        if (isExistsEmail) {
            throw new ConflictException(
                'Registration failed. The user with this email already exists, please use another email.',
            );
        }

        const newUser = await this.userService.create({
            displayName: dto.name,
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

    public async login(req: Request, dto: LoginDto) {
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

        return this.saveSession(req, user);
    }

    public async extractProfileFromCode(
        req: Request,
        provider: string,
        code: string,
    ) {
        const providerInstance = this.providerService.findByService(provider);

        if (!providerInstance) {
            throw new Error(`OAuth provider '${provider}' not found.`);
        }

        const profile = await providerInstance.exchangeAccessCode(code);

        let user = await this.userService.findByEmail(profile.email);

        let account = null;

        if (user) {
            account = await this.prismaService.account.findFirst({
                where: {
                    userId: user.id,
                    provider: profile.provider,
                },
            });

            return this.saveSession(req, user);
        }

        user = await this.userService.create({
            email: profile.email,
            password: '',
            displayName: profile.name,
            method: profile.provider,
            isVerified: true,
            picture: profile.picture,
        });

        if (!account) {
            await this.prismaService.account.create({
                data: {
                    userId: user.id,
                    type: 'oauth',
                    provider: profile.provider,
                    accessToken: profile.accessToken,
                    refreshToken: profile.refreshToken,
                    expiresAt: profile.expiresAt,
                },
            });
        }

        return this.saveSession(req, user);
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
                res.clearCookie(
                    this.configService.getOrThrow<string>('SESSION_NAME'),
                );
                resolve();
            });
        });
    }

    public async saveSession(req: Request, user: User) {
        req.session.userId = user.id;

        return new Promise<void>((resolve, reject) => {
            req.session.save(err => {
                if (err) {
                    reject(
                        new InternalServerErrorException(
                            "Couldn't save session",
                        ),
                    );
                } else {
                    resolve();
                }
            });
        }).then(() => ({ user }));
    }
}
