'use server';

import { z } from 'zod';
import { formSignInSchema } from '../schemes/form-sign-in-schema';
import { ApiStrapiPathes, strapiApi, handleAxiosError } from '@/shared/api';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';

const COOKIE_MAX_AGE = 300;

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

export const signInRequest = async (data: z.infer<typeof formSignInSchema>) => {
	const response = await strapiApi.post(ApiStrapiPathes.Authentication, data);
	return response.data;
};

export const authentificationRequest = async (
	data: z.infer<typeof formSignInSchema>
) => {
	try {
		const responseData = await signInRequest(data);
		const cookieStore = await cookies();
		setAuthCookie(cookieStore, 'email', responseData?.email);
		setAuthCookie(cookieStore, 'verifyType', responseData?.verifyType);
	} catch (error) {
		handleAxiosError(error);
	}
};
