import { AppRoutes } from '@/shared/config';
import { HttpStatusCode } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export class RedirectMiddleware {
	public static redirectIfAuthenticated(request: NextRequest): NextResponse {
		return NextResponse.redirect(new URL(AppRoutes.Home, request.url));
	}

	public static redirectIfNotAuthenticated(
		request: NextRequest
	): NextResponse {
		return NextResponse.redirect(new URL(AppRoutes.SignIn, request.url));
	}

	public static redirectIfNotAuthenticatedApi(
		req: NextApiRequest,
		res: NextApiResponse
	): void {
		res.redirect(HttpStatusCode.Found, AppRoutes.SignIn);
	}

	public static redirectIfAuthenticatedApi(
		req: NextApiRequest,
		res: NextApiResponse
	): void {
		res.redirect(HttpStatusCode.Found, AppRoutes.Home);
	}

    public static redirectIfProblem(
		req: NextApiRequest,
		res: NextApiResponse
	): void {
		res.redirect(HttpStatusCode.Found, AppRoutes.Home);
	}

	public static redirectIfUrlExist(
		req: NextApiRequest,
		res: NextApiResponse,
		url: string
	): void {
		res.redirect(HttpStatusCode.Found, url);
	}
}
