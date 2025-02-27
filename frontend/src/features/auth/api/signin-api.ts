'use server';

import { z } from 'zod';
import { formSignInSchema } from '../schemes/form-sign-in-schema';
import { ApiStrapiPathes, strapiApi, handleAxiosError } from '@/shared/api';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';
import { COOKIE_MAX_AGE } from '../constants/settings-session';



const setAuthCookie = (
	cookieStore: ReadonlyRequestCookies,
	name: string,
	value: string
) => {
	cookieStore.set(name, value, {
		httpOnly: true,
		secure: true,
		maxAge: COOKIE_MAX_AGE,
	});
};

export const signInApiRequest = async (
	data: z.infer<typeof formSignInSchema>
) => {
	try {
		const response = await strapiApi.post(
			ApiStrapiPathes.Authentication,
			data
		);
		return response.data;
	} catch (error) {
		handleAxiosError(error);
	}
};

export const authentificationRequest = async (
	data: z.infer<typeof formSignInSchema>
) => {
	const responseData = await signInApiRequest(data);
	const cookieStore = await cookies();
	setAuthCookie(cookieStore, 'email', responseData?.email);
	setAuthCookie(cookieStore, 'verifyType', responseData?.verifyType);

	return responseData;
};
