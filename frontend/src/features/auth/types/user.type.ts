export enum UserRole {
	Regular = 'REGULAR',
	Admin = 'ADMIN',
}

export enum AuthMethod {
	Credentials = 'CREDENTIALS',
	Google = 'GOOGLE',
	Yandex = 'YANDEX',
	GitHub = 'GITHUB',
}

export interface AccountProps {
	id: string;
	createdAt: string;
	updatedAt: string;
	type: string;
	provider: string;
	refreshToken: string;
	accessToken: string;
	expiresAt: number;
	userId: string;
}

export interface UserProps {
	id: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	password: string;
	name: string;
	avatar: string;
	role: UserRole;
	isVerified: boolean;
	isTwoFactorEnabled: boolean;
	method: AuthMethod;
	accounts: AccountProps[];
}
