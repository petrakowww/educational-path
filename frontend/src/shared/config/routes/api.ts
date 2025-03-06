export enum ApiRoutesAuth {
	register = 'auth/register',
	login = 'auth/login',
	logout = 'auth/logout',
	providerConnect = 'auth/oauth/connect/',
	emailConfirmation = 'auth/email-confirmation/',
	twoFactorVerification = 'auth/twa/oauth/',
	passwordNew = 'auth/password-recovery/new/',
	passwordReset = 'auth/password-recovery/reset',
	checkSession = 'auth/refresh-tokens',
}

export const apiRoutes = {
	auth: ApiRoutesAuth,
};
