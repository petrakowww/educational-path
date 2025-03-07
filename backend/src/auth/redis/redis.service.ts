import IORedis from 'ioredis';

import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
    private readonly redisClient: IORedis;
    private readonly REFRESH_TOKEN_PREFIX: string;

    public constructor(private readonly configService: ConfigService) {
        this.redisClient = new IORedis({
            host: configService.getOrThrow<string>('REDIS_HOST'),
            port: configService.getOrThrow<number>('REDIS_PORT_EXTERNAL'),
            password: configService.getOrThrow<string>('REDIS_PASSWORD'),
        });

        this.REFRESH_TOKEN_PREFIX = this.configService.getOrThrow<string>(
            'REFRESH_TOKEN_PREFIX',
        );
    }

    private async removeOldSessions(userId: string): Promise<void> {
        const pattern = `${this.REFRESH_TOKEN_PREFIX}:${userId}:*`;
        let cursor = '0';

        do {
            const result = await this.redisClient.scan(
                cursor,
                'MATCH',
                pattern,
                'COUNT',
                100,
            );
            cursor = result[0];
            const keys = result[1];

            if (keys.length > 0) {
                await this.redisClient.del(...keys);
            }
        } while (cursor !== '0');
    }

    public async setRefreshToken(
        userId: string,
        sessionId: string,
        refreshToken: string,
        expiresIn: number = 3600,
    ): Promise<void> {
        const tokenKey = `${this.REFRESH_TOKEN_PREFIX}:${sessionId}`;

        try {
            await this.removeOldSessions(userId);
            await this.redisClient.set(tokenKey, refreshToken, 'EX', expiresIn);
        } catch {
            throw new UnauthorizedException('Failed to set refresh token');
        }
    }

    public async getRefreshToken(sessionId: string): Promise<string> {
        const tokenKey = `${this.REFRESH_TOKEN_PREFIX}:${sessionId}`;

        try {
            const refreshToken = await this.redisClient.get(tokenKey);

            if (!refreshToken) {
                throw new UnauthorizedException(
                    'Refresh token not found or expired',
                );
            }

            return refreshToken;
        } catch {
            throw new UnauthorizedException('Error retrieving refresh token');
        }
    }

    public async removeRefreshToken(sessionId: string): Promise<void> {
        const tokenKey = `${this.REFRESH_TOKEN_PREFIX}:${sessionId}`;

        try {
            await this.redisClient.del(tokenKey);
        } catch {
            throw new UnauthorizedException('Error removing refresh token');
        }
    }

    public async verifyRefreshToken(
        sessionId: string,
        refreshToken: string,
    ): Promise<boolean> {
        try {
            const storedToken = await this.getRefreshToken(sessionId);
            return storedToken === refreshToken;
        } catch {
            return false;
        }
    }
}
