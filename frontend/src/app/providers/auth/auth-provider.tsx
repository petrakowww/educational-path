'use client';

import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { useAuthMutation } from './hook/use-auth-mutation';
import { isTokenValid } from './utils/is-valid';
import Cookies from 'js-cookie';

interface AuthContextProps {
	isAuthenticated: boolean;
	isLoading: boolean;
}

const AuthContextInit: AuthContextProps = {
	isAuthenticated: false,
	isLoading: true,
};

const AuthContext = createContext<AuthContextProps>(AuthContextInit);

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
	const { children } = props;
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { authorization } = useAuthMutation(setIsAuthenticated, () =>
		setIsLoading(false)
	);

	useEffect(() => {
		const token = Cookies.get(process.env.ACCESS_TOKEN || '');
		if (token) {
			isTokenValid(token).then((isValid) => {
				if (isValid) {
					setIsAuthenticated(true);
				} else {
					setIsAuthenticated(false);
					authorization();
				}
			});
		} else {
			setIsAuthenticated(false);
			authorization();
		}
	}, [authorization]);

	const value = useMemo(
		() => ({ isAuthenticated, isLoading }),
		[isAuthenticated, isLoading]
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
