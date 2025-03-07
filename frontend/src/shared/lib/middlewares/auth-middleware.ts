import { apiRoutes, AppGroupRoutes, AppRoutes } from '@/shared/config';
import { NextResponse, type NextRequest } from 'next/server';

import { jwtVerify } from 'jose';

export class AuthMiddleware {
	private request: NextRequest;
	private accessToken: string | null;
	private refreshToken: string | null;

	constructor(request: NextRequest) {
		this.request = request;
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
		return NextResponse.redirect(
			new URL(AppRoutes.Dashboard, this.request.url)
		);
	}

	private redirectIfNotAuthenticated(): NextResponse {
		return NextResponse.redirect(
			new URL(AppRoutes.SignIn, this.request.url)
		);
	}

	public async handle(): Promise<NextResponse> {
		if (this.isAuthPage()) {
			const isValid = await this.isTokenValid();
			return isValid
				? this.redirectIfAuthenticated()
				: NextResponse.next();
		}

		const isValid = await this.isTokenValid();
		if (isValid) {
			return NextResponse.next();
		}

		return this.redirectIfNotAuthenticated();
	}

	private async isTokenValid(): Promise<boolean> {
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
				if (!this.refreshToken) {
					return false;
				}
			}
		}
		if (this.refreshToken) {
			
		}

		return false;
	}
}
