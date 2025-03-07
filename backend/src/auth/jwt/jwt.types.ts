export type JwtPayload = {
    sessionId: string;
    userId: string;
};

export type RefreshTokens = {
    accessToken: string;
    refreshToken: string;
}

export type TokenType = 'Access Token' | 'Refresh Token';