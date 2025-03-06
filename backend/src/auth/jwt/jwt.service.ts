import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { ExtendAuthCookieRequest } from '@/config/types/context-request.type';
import { isDev } from '@/libs/common/utils/is-dev.util';
import { parse } from '@/libs/common/utils/ms.util';

import { RedisService } from '../redis/redis.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtService {
    private readonly ACCESS_TOKEN_SECRET_KEY: jwt.Secret;
    private readonly REFRESH_TOKEN_SECRET_KEY: jwt.Secret;
    private readonly EXPIRES_IN: number;
    private readonly REFRESH_TOKEN_EXPIRES_IN: number;
    public readonly ACCESS_TOKEN_COOKIE_NAME = 'access_token';
    public readonly REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';
    private readonly JWT_HTTP_ONLY: boolean;
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
        this.EXPIRES_IN = parse(
            configService.get<string>('JWT_EXPIRES_IN', '1h'),
        );
        this.REFRESH_TOKEN_EXPIRES_IN = parse(
            configService.get<string>('JWT_REFRESH_EXPIRES_IN', '7d'),
        );
        this.JWT_HTTP_ONLY = configService.getOrThrow<boolean>('JWT_HTTP_ONLY');
        this.JWT_HOST = configService.getOrThrow<string>('JWT_HOST');
    }

    public generateAccessToken(payload: JwtPayload): string {
        return jwt.sign(payload, this.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: this.EXPIRES_IN,
        });
    }

    public async generateRefreshToken(payload: JwtPayload): Promise<string> {
        const refreshToken = jwt.sign(payload, this.REFRESH_TOKEN_SECRET_KEY, {
            expiresIn: this.REFRESH_TOKEN_EXPIRES_IN,
        });

        await this.redisService.setRefreshToken(
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
            throw new UnauthorizedException('Invalid or expired access token');
        }
    }

    public async verifyRefreshToken<T = JwtPayload>(token: string): Promise<T> {
        try {
            const payload = jwt.verify(token, this.REFRESH_TOKEN_SECRET_KEY) as T;
            const sessionId = (payload as JwtPayload).sessionId;

            const storedToken =
                await this.redisService.getRefreshToken(sessionId);
            if (storedToken !== token) {
                throw new UnauthorizedException(
                    'Refresh token mismatch or expired',
                );
            }

            return payload;
        } catch {
            throw new UnauthorizedException('Invalid or expired refresh token');
        }
    }

    public setTokenCookie(
        res: Response,
        token: string,
        isRefreshToken = false,
    ): void {
        const maxAge = isRefreshToken
            ? this.REFRESH_TOKEN_EXPIRES_IN
            : this.EXPIRES_IN;
        const cookieName = isRefreshToken
            ? this.REFRESH_TOKEN_COOKIE_NAME
            : this.ACCESS_TOKEN_COOKIE_NAME;

        res.cookie(cookieName, token, {
            httpOnly: isRefreshToken,
            secure: !isDev(this.configService),
            sameSite: 'lax',
            maxAge: maxAge,
            domain: this.JWT_HOST,
        });
    }

    public clearTokenCookie(res: Response, isRefreshToken = false): void {
        const cookieName = isRefreshToken
            ? this.REFRESH_TOKEN_COOKIE_NAME
            : this.ACCESS_TOKEN_COOKIE_NAME;
        res.clearCookie(cookieName);
    }

    public async validateOrRefreshAccessToken(
        req: ExtendAuthCookieRequest,
        res: Response,
    ): Promise<JwtPayload> {
        const accessToken = req.cookies[this.ACCESS_TOKEN_COOKIE_NAME] as
            | string
            | undefined;
        if (accessToken) {
            try {
                return this.verifyAccessToken<JwtPayload>(accessToken);
            } catch {
                console.warn('Access token invalid, attempting refresh...');
            }
        }

        const refreshToken = req.cookies[this.REFRESH_TOKEN_COOKIE_NAME] as
            | string
            | undefined;
        if (!refreshToken) {
            throw new UnauthorizedException('No valid tokens provided');
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

        this.setTokenCookie(res, newAccessToken, false);
        this.setTokenCookie(res, newRefreshToken, true);

        return this.verifyAccessToken<JwtPayload>(newAccessToken);
    }

    public async logout(
        req: ExtendAuthCookieRequest,
        res: Response,
    ): Promise<void> {
        const refreshToken = req.cookies[this.REFRESH_TOKEN_COOKIE_NAME] as
            | string
            | undefined;
        if (refreshToken) {
            try {
                const payload = jwt.verify(
                    refreshToken,
                    this.REFRESH_TOKEN_SECRET_KEY,
                ) as JwtPayload;
                await this.redisService.removeRefreshToken(payload.sessionId);
            } catch {
                console.warn(
                    'Failed to remove refresh token, possibly already expired.',
                );
            }
        }

        this.clearTokenCookie(res, false);
        this.clearTokenCookie(res, true);
    }
}
