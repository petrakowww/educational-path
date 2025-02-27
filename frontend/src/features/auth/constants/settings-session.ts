import { SessionOptions } from 'iron-session';

export const cookieOptionsSettings: SessionOptions['cookieOptions'] = {
	cookieOptions: {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	},
};

export const cookieName = 'education-path-cookie-app';

export const COOKIE_MAX_AGE = 300;