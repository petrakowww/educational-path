import { NextResponse, type NextRequest } from 'next/server';
import { AuthMiddleware } from './shared/lib';

export default function middleware(request: NextRequest, response: NextResponse) {
	return new AuthMiddleware(request, response).handle();
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*', '/account/:path*'],
	exclude: ['/auth/new-verification/:path*'],
};
