'use server';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { ICookieClient } from './cookie.type';
import { NextApiRequest, NextApiResponse } from 'next';

export class CookieServer implements ICookieClient {
	private accessToken: string;
	private refreshToken: string;

	constructor(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}

	getAccessToken(req: NextApiRequest, res: NextApiResponse): string | undefined {
		return getCookie(this.accessToken, { req, res }) as string | undefined;
	}

	getRefreshToken(req: NextApiRequest, res: NextApiResponse): string | undefined {
		return getCookie(this.refreshToken, { req, res }) as string | undefined;
	}

	setAccessToken(req: NextApiRequest, res: NextApiResponse, value: string, options?: object) {
		setCookie(this.accessToken, value, { req, res, ...options });
	}

	setRefreshToken(req: NextApiRequest, res: NextApiResponse, value: string, options?: object) {
		setCookie(this.refreshToken, value, { req, res, ...options });
	}

	deleteAccessToken(req: NextApiRequest, res: NextApiResponse) {
		deleteCookie(this.accessToken, { req, res });
	}

	deleteRefreshToken(req: NextApiRequest, res: NextApiResponse) {
		deleteCookie(this.refreshToken, { req, res });
	}

	logout(req: NextApiRequest, res: NextApiResponse) {
		this.deleteAccessToken(req, res);
		this.deleteRefreshToken(req, res);
	}
}

export const cookieServer = new CookieServer(
	process.env.ACCESS_TOKEN || 'access_token',
	process.env.REFRESH_TOKEN || 'refresh_token'
);