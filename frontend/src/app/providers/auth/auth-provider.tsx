import {
	createContext,
	useState,
	useEffect,
	useContext,
	useMemo,
	useCallback,
} from 'react';
import { isTokenValid } from './utils/is-valid';
import { useAuthorizationMutation } from './hook/use-refresh-mutation';
import { cookieClient } from '@/shared/lib/utils/cookie.client';

interface AuthContextProps {
	isAuthenticated: boolean;
	isLoading: boolean;
	logout: () => void;
	login: () => void;
	refresh: () => void;
}

const AuthContextInit: AuthContextProps = {
	isAuthenticated: false,
	isLoading: true,
	logout: () => {},
	login: () => {},
	refresh: () => {},
};

const AuthContext = createContext<AuthContextProps>(AuthContextInit);

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [lastToken, setLastToken] = useState<string | undefined>(undefined);

	const updateAuthState = useCallback((isAuthorized: boolean) => {
		setIsAuthenticated(isAuthorized);
		setIsLoading(false);
	}, []);

	// Проверка токена при загрузке и изменении
	useEffect(() => {
		const token = cookieClient.getAccessToken();
	
		if (token && token !== lastToken) {
			setLastToken(token);
			isTokenValid(token)
				.then(() => updateAuthState(true))
				.catch(() => updateAuthState(false));
		} else if (!token) {
			updateAuthState(false);
		}
	}, [lastToken, updateAuthState]);

	const logout = useCallback(() => {
		cookieClient.logout();
		setLastToken(undefined);
		updateAuthState(false);
	}, [updateAuthState]);

	const login = useCallback(() => {
		const token = cookieClient.getAccessToken();
		if (token) {
			setLastToken(token);
			updateAuthState(true);
		}
	}, [updateAuthState]);

	const { authorization } = useAuthorizationMutation();

	const refresh = useCallback(() => {
		authorization().then(() => {
			const token = cookieClient.getAccessToken();
			if (token) {
				setLastToken(token);
				updateAuthState(true);
			}
		});
	}, [authorization, updateAuthState]);

	const value = useMemo(
		() => ({
			isAuthenticated,
			isLoading,
			login,
			logout,
			refresh,
		}),
		[isAuthenticated, isLoading, login, logout, refresh]
	);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
