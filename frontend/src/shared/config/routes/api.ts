export enum ApiRoutesAuth {
	register = 'auth/register',
	login = 'auth/login',
	logout = 'auth/logout',
	providerConnect = 'auth/oauth/connect/',
	emailConfirmation = 'auth/email-confirmation/',
	twoFactorVerification = 'auth/oauth/twa/',
	passwordNew = 'auth/password-recovery/new/',
	passwordReset = 'auth/password-recovery/reset',
	refreshTokens = 'auth/refresh-tokens',
}

export enum ApiRoutesToken {
	refreshTokenRedirect = 'api/refresh',
}

export enum ApiRoutesAvatars {
	updateProfileAvatar = '/avatars/update',
	deleteProfileAvatar = '/avatars/delete',
}

export enum ApiRoutesUser {
	updatePassword = '/user/password/change',
	updateEmail = '/user/email/change',
}

export const apiRoutes = {
	auth: ApiRoutesAuth,
	token: ApiRoutesToken,
	avatars: ApiRoutesAvatars,
	user: ApiRoutesUser,
};
