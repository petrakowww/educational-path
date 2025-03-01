import { type NextRequest } from 'next/server';
import { AuthMiddleware } from './shared/lib';

// TODO: Добавить для проверки по роли (не только по авторизации)

export default function middleware(request: NextRequest) {
	return new AuthMiddleware(request).handle();
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*'],
	exclude: ['/auth/new-verification/:path*'],
};
