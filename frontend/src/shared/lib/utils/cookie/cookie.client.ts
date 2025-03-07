'use client';

import { deleteCookie, getCookie, setCookie } from 'cookies-next/client';
import { ICookieClient } from './cookie.type';

export class CookieClient implements ICookieClient {
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

	setAccessToken(_: unknown, __: unknown, value: string, options?: object) {
		setCookie(this.accessToken, value, options);
	}

	setRefreshToken(_: unknown, __: unknown, value: string, options?: object) {
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