import { AppGroupRoutes, AppRoutes } from '@/shared/config';
import { NextResponse, type NextRequest } from 'next/server';

export class AuthMiddleware {
    private request: NextRequest;
    private session: string | null;

    constructor(request: NextRequest) {
        this.request = request;
        this.session = this.getSession();
    }

    private getSession(): string | null {
        return this.request.cookies.get('session')?.value ?? null;
    }

    private isAuthPage(): boolean {
        return this.request.url.includes(AppGroupRoutes.Auth);
    }

    private redirectIfAuthenticated(): NextResponse {
        return NextResponse.redirect(new URL(AppRoutes.Dashboard, this.request.url));
    }

    private redirectIfNotAuthenticated(): NextResponse {
        return NextResponse.redirect(new URL(AppRoutes.SignIn, this.request.url));
    }

    public handle(): NextResponse {
        if (this.isAuthPage()) {
            return this.session ? this.redirectIfAuthenticated() : NextResponse.next();
        }

        return this.session ? NextResponse.next() : this.redirectIfNotAuthenticated();
    }
}
