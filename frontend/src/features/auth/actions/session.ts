'use server';

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import {
	defaultSession,
	SessionData,
	sessionOptions,
} from '../lib/session-data';

export async function getSession() {
	const useCookies = await cookies();
	const session = await getIronSession<SessionData>(
		useCookies,
		sessionOptions
	);

	if (!session.isLoggedIn) {
		session.isLoggedIn = defaultSession.isLoggedIn;
		session.username = defaultSession.username;
	}

	return session;
}
