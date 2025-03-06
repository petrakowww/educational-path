import { AppGroupRoutes, AppRoutes } from '@/shared/config';
import { NextResponse, type NextRequest } from 'next/server';

import { jwtVerify } from 'jose';

export class AuthMiddleware {
	private request: NextRequest;
	private token: string | null;

	constructor(request: NextRequest) {
		this.request = request;
		this.token = this.getToken();
	}

	private getToken(): string | null {
		return (
			this.request.cookies.get(process.env.ACCESS_TOKEN || 'access_token')
				?.value ?? null
		);
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
			return this.token && isValid
				? this.redirectIfAuthenticated()
				: NextResponse.next();
		}

		const isValid = await this.isTokenValid();
		return this.token && isValid
			? NextResponse.next()
			: this.redirectIfNotAuthenticated();
	}

	private async isTokenValid(): Promise<boolean> {
		if (!this.token) return false;

		try {
			const { payload } = await jwtVerify(
				this.token,
				new TextEncoder().encode(process.env.JWT_SECRET_KEY || 'secret')
			);

			if (payload.exp === undefined) {
				return false;
			}
			return payload.exp > Math.floor(Date.now() / 1000);
		} catch {
			return false;
		}
	}
}
