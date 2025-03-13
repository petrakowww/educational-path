import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';
import { RedirectMiddleware } from '@/shared/lib/middlewares/redirect-middleware';
import { apiRoutes } from '@/shared/config';
import { cookieClient } from '@/shared/lib/utils/cookie.client';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const refreshTokenCookie = await getCookie(
		process.env.REFRESH_TOKEN || 'refresh_token',
		{ req }
	);

	const redirectUrl = req.query.redirect as string;

	if (refreshTokenCookie) {
		try {
			const response = await fetch(
				`${process.env.SERVER_URL}/${apiRoutes.auth.refreshTokens}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Cookie: `${process.env.REFRESH_TOKEN}=${refreshTokenCookie};`,
					},
					credentials: 'include',
				}
			);
			if (!response.ok) {
				throw new Error('Неавторизованный пользователь');
			}

			const data = await response.json();

			if (!data.accessToken) {
				throw new Error('Неавторизованный пользователь');
			}

			res.setHeaders(response.headers);

			if (redirectUrl) {
				return RedirectMiddleware.redirectIfUrlExist(
					req,
					res,
					redirectUrl
				);
			}

			return RedirectMiddleware.redirectIfProblem(req, res);
		} catch {
			cookieClient.logout(req, res);
			return RedirectMiddleware.redirectIfNotAuthenticatedApi(req, res);
		}
	}

	return RedirectMiddleware.redirectIfProblem(req, res);
}
