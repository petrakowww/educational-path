'use client';

import { setCookie, getCookie, deleteCookie } from 'cookies-next';

class CookieClient {
	private accessToken: string;
	private refreshToken: string;

	constructor(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}

	getAccessToken(): string | undefined {
		return getCookie(this.accessToken) as string | undefined;
	}

	getRefreshToken(): string | undefined {
		return getCookie(this.refreshToken) as string | undefined;
	}

	setAccessToken(value: string, options?: { [key: string]: unknown }) {
		setCookie(this.accessToken, value, options);
	}

	setRefreshToken(value: string, options?: { [key: string]: unknown }) {
		setCookie(this.refreshToken, value, options);
	}

	deleteAccessToken() {
		deleteCookie(this.accessToken);
	}

	deleteRefreshToken() {
		deleteCookie(this.refreshToken);
	}

	logout() {
		this.deleteAccessToken();
		this.deleteRefreshToken();
	}
}

export const cookieClient = new CookieClient(
	process.env.ACCESS_TOKEN || 'access_token',
	process.env.REFRESH_TOKEN || 'refresh_token'
);
