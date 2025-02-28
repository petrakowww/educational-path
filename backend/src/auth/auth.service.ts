import { verify } from 'argon2';
import { Request, Response } from 'express';

import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ProviderService } from './provider/provider.service';
import {
    ConflictException,
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

        return this.saveSession(req, newUser);
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

        return this.saveSession(req, user);
    }

    public async extractProfileFromCode(
        req: Request,
        provider: string,
        code: string,
    ) {
        const providerInstance = this.providerService.findByService(provider);

        if (!providerInstance) {
            throw new Error(`OAuth provider '${provider}' not found`);
        }

        const profile = await providerInstance.exchangeAccessCode(code);

        const account = await this.prismaService.account.findFirst({
            where: {
                id: profile.id,
                provider: profile.provider,
            },
        });

        const user = account?.userId
            ? await this.userService.findById(account.userId)
            : null;

        if (user) {
            return this.saveSession(req, user);
        }

        const [newUser] = await this.prismaService.$transaction([
            this.prismaService.user.create({
                data: {
                    email: profile.email,
                    password: '',
                    displayName: profile.name,
                    method: profile.provider,
                    isVerified: true,
                    picture: profile.picture,
                },
            }),
            this.prismaService.account.create({
                data: {
                    userId: profile.id,
                    type: 'oauth',
                    provider: profile.provider,
                    accessToken: profile.accessToken,
                    refreshToken: profile.refreshToken,
                    expiresAt: profile.expiresAt,
                },
            }),
        ]);

        return this.saveSession(req, newUser);
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
