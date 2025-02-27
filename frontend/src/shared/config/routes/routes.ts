export enum AppRoutes {
	Home = '/',
	Editor = '/editor',
	Dashboard = '/dashboard',
	View = '/view',
	SignUp = '/signup',
	SignIn = '/signin',
	ForgotPassword = 'forgot-password',
	VerifyAccount = 'verify',
}

export type RoutePath = keyof typeof AppRoutes;
