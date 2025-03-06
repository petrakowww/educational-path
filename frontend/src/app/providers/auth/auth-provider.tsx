'use client';

import { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { useAuthMutation } from './hook/use-auth-mutation';

interface AuthContextProps {
	isAuthenticated: boolean;
	isLoading: boolean;
}

const AuthContextInit: AuthContextProps = {
	isAuthenticated: false,
	isLoading: true,
};

const AuthContext = createContext(AuthContextInit);

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

	// useEffect(() => {
	// 	authorization();
	// }, [authorization]);

	const value = useMemo(
		() => ({ isAuthenticated, isLoading }),
		[isAuthenticated, isLoading]
	);

	return (
		<AuthContext.Provider value={AuthContextInit}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
