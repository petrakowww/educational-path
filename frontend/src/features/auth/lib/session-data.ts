import { SessionOptions } from 'iron-session';
import { cookieOptionsSettings } from '../constants/settings-session';
import { cookieName } from '../constants/settings-session';

export interface SessionData {
	username: string;
	isLoggedIn: boolean;
	jwt?: string;
}

export const defaultSession: SessionData = {
	username: '',
	isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
	password: process.env.NEXT_PUBLIC_SESSION_PASSWORD!,
	cookieName: cookieName,
	cookieOptions: cookieOptionsSettings,
};
