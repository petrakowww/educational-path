import { type NextRequest } from 'next/server';
import { AuthMiddleware } from './shared/lib';

export default function middleware(request: NextRequest) {
	return new AuthMiddleware(request).handle();
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*', '/account/:path*'],
	exclude: ['/auth/new-verification/:path*'],
};
