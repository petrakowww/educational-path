export enum ApiRoutesAuth {
	register = 'auth/register',
	login = 'auth/login',
	logout = 'auth/logout',
	providerConnect = 'auth/oauth/connect/',
	emailConfirmation = 'auth/email-confirmation/',
	twoFactorVerification = 'auth/twa/oauth/',
	passwordNew = 'auth/password-recovery/new/',
	passwordReset = 'auth/password-recovery/reset',
	refreshTokens = 'auth/refresh-tokens',
}

export enum ApiRoutesToken {
	refreshTokenRedirect = 'api/refresh',
}

export enum ApiRoutesUsers {
	updateProfileAvatar = '/users/upload-avatar',
	deleteProfileAvatar = '/users/delete-avatar',
}

export const apiRoutes = {
	auth: ApiRoutesAuth,
	token: ApiRoutesToken,
	users: ApiRoutesUsers,
};
