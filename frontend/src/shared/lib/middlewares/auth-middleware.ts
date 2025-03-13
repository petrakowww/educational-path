import { apiRoutes, AppGroupRoutes } from '@/shared/config';
import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { RedirectMiddleware } from './redirect-middleware';

export class AuthMiddleware {
	private request: NextRequest;
	private response: NextResponse;
	private accessToken: string | null;
	private refreshToken: string | null;
	private readonly REDIRECT_PARAM = 'redirect';

	constructor(request: NextRequest, response: NextResponse) {
		this.request = request;
		this.response = response;
		this.accessToken = this.getToken(
			process.env.ACCESS_TOKEN || 'access_token'
		);
		this.refreshToken = this.getToken(
			process.env.REFRESH_TOKEN || 'refresh_token'
		);
	}

	private getToken(cookieName: string): string | null {
		return this.request.cookies.get(cookieName)?.value ?? null;
	}

	private isAuthPage(): boolean {
		return this.request.url.includes(AppGroupRoutes.Auth);
	}

	private redirectIfAuthenticated(): NextResponse {
		return RedirectMiddleware.redirectIfAuthenticated(this.request);
	}

	private redirectIfNotAuthenticated(): NextResponse {
		return RedirectMiddleware.redirectIfNotAuthenticated(this.request);
	}

	public async handle(): Promise<NextResponse> {
		if (this.isAuthPage()) {
			const isValid = await this.isAccessTokenValid();

			if (isValid) {
				return this.redirectIfAuthenticated();
			}

			if (this.refreshToken) {
				const redirectUrl = this.createRedirectUrl(
					apiRoutes.token.refreshTokenRedirect
				);
				return NextResponse.redirect(redirectUrl);
			} else {
				return NextResponse.next();
			}
		}

		const isValid = await this.isAccessTokenValid();
		if (isValid) {
			return NextResponse.next();
		}

		if (this.refreshToken) {
			const redirectUrl = this.createRedirectUrl(
				apiRoutes.token.refreshTokenRedirect
			);
			return NextResponse.redirect(redirectUrl);
		}

		return this.redirectIfNotAuthenticated();
	}

	private async isAccessTokenValid(): Promise<boolean> {
		if (this.accessToken) {
			try {
				const { payload } = await jwtVerify(
					this.accessToken,
					new TextEncoder().encode(
						process.env.JWT_SECRET_KEY || 'secret'
					)
				);

				if (
					payload.exp &&
					payload.exp > Math.floor(Date.now() / 1000)
				) {
					return true;
				}
			} catch {
				this.request.cookies.delete(
					process.env.ACCESS_TOKEN || 'access_token'
				);
				return false;
			}
		}

		return false;
	}

	private createRedirectUrl(redirectUrl: string): URL {
		const url = new URL(redirectUrl, process.env.FRONTEND_URL);
		if (!url.searchParams.has(this.REDIRECT_PARAM)) {
			url.searchParams.set(this.REDIRECT_PARAM, this.request.url);
		}
		return url;
	}
}
