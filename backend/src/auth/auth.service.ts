import { verify } from 'argon2';
import { Request, Response } from 'express';

import { UserService } from '@/user/user.service';
import { ConfigService } from '@nestjs/config';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthMethod, User } from '@prisma/__generated__';

@Injectable()
export class AuthService {
    public constructor(
        private readonly userService: UserService, 
        private readonly configService: ConfigService,) {}
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
					this.configService.getOrThrow<string>('SESSION_NAME')
				)
				resolve()
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
