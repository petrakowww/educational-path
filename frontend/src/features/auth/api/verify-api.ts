import { z } from 'zod';
import { formVerifySchema } from '../schemes/form-verify-schema';
import { ApiStrapiPathes, handleAxiosError, strapiApi } from '@/shared/api';
import { getSession } from '../actions/session';

export const verifyCodeRequest = async (
	data: z.infer<typeof formVerifySchema>
) => {
	const response = await strapiApi.post(ApiStrapiPathes.Verify, data);
	return response.data;
};

export const verifyCodeAndSetSession = async (
	data: z.infer<typeof formVerifySchema>
) => {
	try {
		const responseData = await verifyCodeRequest(data);
		const session = await getSession();

		session.username = responseData.username;
		session.isLoggedIn = true;
		session.jwt = responseData.jwt;

		await session.save();
	} catch (error) {
		handleAxiosError(error);
	}
};
