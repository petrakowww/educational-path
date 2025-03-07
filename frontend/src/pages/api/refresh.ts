import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';
import { RedirectMiddleware } from '@/shared/lib/middlewares/redirect-middleware';
import { cookieServer } from '@/shared/lib/utils/cookie/cookie.server';
import { apiRoutes } from '@/shared/config';

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
			const response = await refreshToken(refreshTokenCookie);
      
			if (!response.ok) {
				throw new Error('Unauthorized');
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
			cookieServer.logout(req, res);
			return RedirectMiddleware.redirectIfNotAuthenticatedApi(req, res);
		}
	}

	return RedirectMiddleware.redirectIfProblem(req, res);
}

async function refreshToken(refreshToken: string): Promise<Response> {
    const response = await fetch(`${process.env.SERVER_URL}/${apiRoutes.auth.refreshTokens}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${process.env.REFRESH_TOKEN}=${refreshToken};`,
      },
      credentials: 'include',
    });

    return response;
}
