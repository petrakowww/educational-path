import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { isDev } from '@/libs/common/utils/is-dev.util';
import { parse } from '@/libs/common/utils/ms.util';

import { RedisService } from '../redis/redis.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { JwtPayload, RefreshTokens, TokenType } from './jwt.types';

@Injectable()
export class JwtService {
    private readonly ACCESS_TOKEN_SECRET_KEY: jwt.Secret;
    private readonly REFRESH_TOKEN_SECRET_KEY: jwt.Secret;
    private readonly ACCESS_TOKEN_EXPIRES_IN: number;
    private readonly REFRESH_TOKEN_EXPIRES_IN: number;
    public readonly ACCESS_TOKEN_COOKIE_NAME = 'access_token';
    public readonly REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';
    private readonly JWT_HOST: string;

    public constructor(
        private readonly configService: ConfigService,
        private readonly redisService: RedisService,
    ) {
        this.ACCESS_TOKEN_SECRET_KEY = configService.getOrThrow<jwt.Secret>(
            'JWT_ACCESS_SECRET_KEY',
        );
        this.REFRESH_TOKEN_SECRET_KEY = configService.getOrThrow<jwt.Secret>(
            'JWT_REFRESH_SECRET_KEY',
        );
        this.ACCESS_TOKEN_EXPIRES_IN = parse(
            configService.get<string>('JWT_EXPIRES_IN', '3d'),
        );
        this.REFRESH_TOKEN_EXPIRES_IN = parse(
            configService.get<string>('JWT_REFRESH_EXPIRES_IN', '30d'),
        );
    }

    public generateAccessToken(payload: JwtPayload): string {
        return jwt.sign(payload, this.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: this.ACCESS_TOKEN_EXPIRES_IN,
        });
    }

    public async generateRefreshToken(payload: JwtPayload): Promise<string> {
        const refreshToken = jwt.sign(payload, this.REFRESH_TOKEN_SECRET_KEY, {
            expiresIn: this.REFRESH_TOKEN_EXPIRES_IN,
        });

        await this.redisService.setRefreshToken(
            payload.userId,
            payload.sessionId,
            refreshToken,
            this.REFRESH_TOKEN_EXPIRES_IN,
        );

        return refreshToken;
    }

    public verifyAccessToken<T = JwtPayload>(token: string): T {
        try {
            return jwt.verify(token, this.ACCESS_TOKEN_SECRET_KEY) as T;
        } catch {
            throw new UnauthorizedException('Недействительный или просроченный токен доступа');
        }
    }

    public async verifyRefreshToken<T = JwtPayload>(token: string): Promise<T> {
        try {
            const payload = jwt.verify(
                token,
                this.REFRESH_TOKEN_SECRET_KEY,
            ) as T;
            const sessionId = (payload as JwtPayload).sessionId;

            const storedToken =
                await this.redisService.getRefreshToken(sessionId);
            if (storedToken !== token) {
                throw new UnauthorizedException(
                    'Несоответствие токена обновления или срок действия которого истек',
                );
            }

            return payload;
        } catch {
            throw new UnauthorizedException('Недействительный или просроченный токен доступа');
        }
    }

    public async refreshTokens(req: Request): Promise<RefreshTokens> {
        const refreshToken = this.getToken(req, 'Refresh Token');
    
        if (!refreshToken) {
            throw new UnauthorizedException('Токен обновления не предоставлен');
        }

        const refreshPayload =
            await this.verifyRefreshToken<JwtPayload>(refreshToken);

        const newAccessToken = this.generateAccessToken({
            sessionId: refreshPayload.sessionId,
            userId: refreshPayload.userId,
        });

        const newRefreshToken = await this.generateRefreshToken({
            sessionId: refreshPayload.sessionId,
            userId: refreshPayload.userId,
        });
        
        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        };
    }

    public setTokenCookie(res: Response, token: string, type: TokenType): void {
        const tokenSettings: {
            [key in TokenType]: {
                cookieName: string;
                maxAge: number;
                httpOnly: boolean;
            };
        } = {
            'Refresh Token': {
                cookieName: this.REFRESH_TOKEN_COOKIE_NAME,
                maxAge: this.REFRESH_TOKEN_EXPIRES_IN,
                httpOnly: true,
            },
            'Access Token': {
                cookieName: this.ACCESS_TOKEN_COOKIE_NAME,
                maxAge: this.ACCESS_TOKEN_EXPIRES_IN,
                httpOnly: false,
            },
        };

        const { cookieName, maxAge, httpOnly } = tokenSettings[type];

        res.cookie(cookieName, token, {
            httpOnly: httpOnly,
            secure: !isDev(this.configService),
            sameSite: 'lax',
            maxAge: maxAge,
            domain: this.JWT_HOST,
        });
    }

    public clearTokenCookie(res: Response, type: TokenType): void {
        const tokenSettings: { [key in TokenType]: { cookieName: string } } = {
            'Refresh Token': {
                cookieName: this.REFRESH_TOKEN_COOKIE_NAME,
            },
            'Access Token': {
                cookieName: this.ACCESS_TOKEN_COOKIE_NAME,
            },
        };

        const { cookieName } = tokenSettings[type];
        res.clearCookie(cookieName);
    }

    public async logout(req: Request, res: Response): Promise<void> {
        const refreshToken = this.getToken(req, 'Refresh Token');
        if (refreshToken) {
            try {
                const payload = jwt.verify(
                    refreshToken,
                    this.REFRESH_TOKEN_SECRET_KEY,
                ) as JwtPayload;
                await this.redisService.removeRefreshToken(payload.sessionId);
            } catch {
                console.warn(
                    'Не удалось удалить токен обновления, возможно, срок действия которого уже истек.',
                );
            }
        }
        this.clearTokenCookie(res, 'Access Token');
        this.clearTokenCookie(res, 'Refresh Token');
    }

    public getToken(req: Request, type: TokenType): string | null {
        const tokenNames: { [key in TokenType]: string } = {
            'Access Token': this.ACCESS_TOKEN_COOKIE_NAME,
            'Refresh Token': this.REFRESH_TOKEN_COOKIE_NAME,
        };

        const tokenName = tokenNames[type];
        const token = req.cookies[tokenName] as string | undefined;

        return token || null;
    }
}

