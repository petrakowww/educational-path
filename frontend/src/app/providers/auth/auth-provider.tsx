'use client';

import {
	createContext,
	useState,
	useEffect,
	useContext,
	useMemo,
	useCallback,
} from 'react';
import { isTokenValid } from './utils/is-valid';
import { cookieClient } from '@/shared/lib/utils/cookie/cookie.client';


interface AuthContextProps {
	isAuthenticated: boolean;
	isLoading: boolean;
	logout: () => void;
}

const AuthContextInit: AuthContextProps = {
	isAuthenticated: false,
	isLoading: true,
	logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(AuthContextInit);

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const updateAuthState = useCallback((isAuthorized: boolean) => {
		setIsAuthenticated(isAuthorized);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		const token = cookieClient.getAccessToken();
		if (token) {
			isTokenValid(token)
				.then(() => updateAuthState(true))
				.catch(() => updateAuthState(false));
		} else {
			updateAuthState(false);
		}
	}, [updateAuthState]);

	const logout = useCallback(() => {
		cookieClient.logout();
		updateAuthState(false);
	}, [updateAuthState]);

	const value = useMemo(
		() => ({
			isAuthenticated,
			logout,
		}),
		[isAuthenticated, logout]
	);

	return (
		<AuthContext.Provider value={{ ...value, isLoading: isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
