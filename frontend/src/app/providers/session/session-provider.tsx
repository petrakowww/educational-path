'use client';

import { createContext, useContext, useActionState } from 'react';
import { getSession } from '@/features/auth';
import { defaultSession, SessionData } from '@/features/auth/lib/session-data';

interface SessionContextType {
	session: SessionData;
	refreshSession: () => void;
}

const sessionContextDefaultValue: SessionContextType = {
	session: defaultSession,
	refreshSession: () => {},
};

const SessionContext = createContext<SessionContextType>(
	sessionContextDefaultValue
);

export function SessionProvider({ children }: { children: React.ReactNode }) {
	const [session, refreshSession] = useActionState(
		getSession,
		defaultSession
	);

	return (
		<SessionContext.Provider value={{ session, refreshSession }}>
			{children}
		</SessionContext.Provider>
	);
}

export function useSession() {
	const context = useContext(SessionContext);
	if (!context) {
		throw new Error('useSession must be used within a SessionProvider');
	}
	return context;
}
