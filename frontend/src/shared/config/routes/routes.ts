export enum AppRoutes {
	Home = '/',
	Editor = '/editor',
	View = '/viewer',
  
	// Maps
	Maps = '/maps',
	MapsPanel = '/maps/panel',
	MapsFavorites = '/maps/favorites',
	MapsLibrary = '/maps/library',
  
	// Auth
	SignUp = '/auth/signup',
	SignIn = '/auth/signin',
	NewPassword = '/auth/new-password',
	ResetPassword = '/auth/reset-password',
	VerifyAccountEmail = '/auth/new-verification',
  
	// Account
	AccountProfile = '/account/profile',
	AccountSettings = '/account/settings',
	AccountSecurity = '/account/security',
  
	// General
	About = '/about',
	Help = '/help',
  
	// Admin
	AdminRoutes = '/admin/routes',
	AdminUsers = '/admin/users',
  }

export enum AppGroupRoutes {
	Auth = '/auth',
}

export type RoutePath = keyof typeof AppRoutes;
