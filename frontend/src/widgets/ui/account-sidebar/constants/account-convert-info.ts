import { AuthMethod, UserRole } from '@/features/auth/types/user.type';

export const userCredentialType: Record<AuthMethod, string> = {
	GOOGLE: 'Google',
	YANDEX: 'Yandex',
	GITHUB: 'GitHub',
	CREDENTIALS: 'Credentials',
} as const;

export const userRoleType: Record<UserRole, string> = {
	REGULAR: 'Авторизованный пользователь',
	ADMIN: 'Администратор',
} as const;

export function getUserCredentialType(credential: string | undefined): string {
	return (
		userCredentialType[credential as AuthMethod] || 'Неизвестная аутентификация'
	);
}

export function getUserRoleType(role: string | undefined): string {
	return userRoleType[role as UserRole] || 'Неизвестный статус';
}
