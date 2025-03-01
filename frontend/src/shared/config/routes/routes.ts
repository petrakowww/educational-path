export enum AppRoutes {
	Home = '/',
	Editor = '/editor',
	Dashboard = '/dashboard',
	View = '/view',
	SignUp = '/auth/signup',
	SignIn = '/auth/signin',
	NewPassword = '/auth/new-password',
	ResetPassword='/auth/reset-password',
	VerifyAccountEmail = '/auth/new-verification',
}

export enum AppGroupRoutes {
	Auth = '/auth',
}

export type RoutePath = keyof typeof AppRoutes;
