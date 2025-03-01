export enum ApiRoutesAuth {
    register='auth/register',
    login='auth/login',
    logout='auth/logout',
    providerConnect='auth/oauth/connect/',
    emailConfirmation='auth/email-confirmation/'
}

export const apiRoutes = {
    auth: ApiRoutesAuth
}


