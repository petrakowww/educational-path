import { jwtVerify } from 'jose';
import { cookies } from 'next/dist/server/request/cookies';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export const isTokenValid = async (token: string) => {
	try {
		const { payload } = await jwtVerify(token, SECRET_KEY);

		if (payload.exp === undefined) {
			return false;
		}
		return payload.exp > Math.floor(Date.now() / 1000);
	} catch {
		return false;
	}
};

export const getIsAuthenticated = async (): Promise<boolean> => {
	const cookieStore = await cookies();
	const token = cookieStore.get(process.env.ACCESS_TOKEN || '')?.value;
	return token ? isTokenValid(token) : false;
};
