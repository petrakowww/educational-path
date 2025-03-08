import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { NextApiRequest, NextApiResponse } from 'next';

type RequestType = NextApiRequest | undefined;
type ResponseType = NextApiResponse | undefined;

export class CookieClient {
	private accessToken: string;
	private refreshToken: string;

	constructor(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}

	private getCookie(cookieName: string, req?: RequestType, res?: ResponseType): string | undefined {
		if (typeof window !== 'undefined') {
			return getCookie(cookieName) as string | undefined;
		} else {
			return getCookie(cookieName, { req, res }) as string | undefined;
		}
	}

	private setCookie(cookieName: string, value: string, req?: RequestType, res?: ResponseType, options?: object): void {
		if (typeof window !== 'undefined') {
			setCookie(cookieName, value, options);
		} else {
			setCookie(cookieName, value, { req, res, ...options });
		}
	}

	private deleteCookie(cookieName: string, req?: RequestType, res?: ResponseType): void {
		if (typeof window !== 'undefined') {
			deleteCookie(cookieName);
		} else {
			deleteCookie(cookieName, { req, res });
		}
	}

	getAccessToken(req?: RequestType, res?: ResponseType): string | undefined {
		return this.getCookie(this.accessToken, req, res);
	}

	setAccessToken(value: string, req?: RequestType, res?: ResponseType, options?: object): void {
		this.setCookie(this.accessToken, value, req, res, options);
	}

	deleteAccessToken(req?: RequestType, res?: ResponseType): void {
		this.deleteCookie(this.accessToken, req, res);
	}

	getRefreshToken(req?: RequestType, res?: ResponseType): string | undefined {
		return this.getCookie(this.refreshToken, req, res);
	}

	setRefreshToken(value: string, req?: RequestType, res?: ResponseType, options?: object): void {
		this.setCookie(this.refreshToken, value, req, res, options);
	}

	deleteRefreshToken(req?: RequestType, res?: ResponseType): void {
		this.deleteCookie(this.refreshToken, req, res);
	}

	logout(req?: RequestType, res?: ResponseType): void {
		this.deleteAccessToken(req, res);
		this.deleteRefreshToken(req, res);
	}
}

export const cookieClient = new CookieClient(
	process.env.ACCESS_TOKEN || 'access_token',
	process.env.REFRESH_TOKEN || 'refresh_token'
);
