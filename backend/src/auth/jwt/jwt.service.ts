import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { isDev } from '@/libs/common/utils/is-dev.util';
import { parse } from '@/libs/common/utils/ms.util';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
    private readonly SECRET_KEY: jwt.Secret;
    private readonly EXPIRES_IN: number;
    private readonly COOKIE_TEMPORARY: string;

    public constructor(private readonly configService: ConfigService) {
        this.SECRET_KEY =
            configService.getOrThrow<jwt.Secret>('JWT_SECRET_KEY');
        this.EXPIRES_IN = parse(
            configService.get<string>('JWT_EXPIRES_IN', '1h'),
        );
        this.COOKIE_TEMPORARY = configService.getOrThrow<string>(
            'COOKIE_TEMPORARY_NAME',
        );
    }

    public generateToken(payload: object): string {
        return jwt.sign(payload, this.SECRET_KEY, {
            expiresIn: this.EXPIRES_IN,
        });
    }

    public verifyToken<T = any>(token: string): T {
        try {
            return jwt.verify(token, this.SECRET_KEY) as T;
        } catch {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }

    public setTokenCookie(res: Response, token: string): void {
        res.cookie(this.COOKIE_TEMPORARY, token, {
            httpOnly: true,
            secure: isDev(this.configService),
            sameSite: 'strict',
            maxAge: this.EXPIRES_IN,
        });
    }

    public clearTokenCookie(res: Response): void {
        res.clearCookie(this.COOKIE_TEMPORARY);
    }

    public generatePublicJWTAuthToken(
        sessionData: { sessionId: string },
        res: Response,
    ): string {
        const newAccessToken = this.generateToken({
            sessionId: sessionData.sessionId,
        });

        this.setTokenCookie(res, newAccessToken);

        return newAccessToken;
    }
}
