import { z } from 'zod';
import { ApiStrapiPathes, handleAxiosError, strapiApi } from '@/shared/api';
import { formSignUpSchema } from '../schemes/form-sing-up-schema';

export const signUpApiRequest = async (
	data: z.infer<typeof formSignUpSchema>
) => {
	try {
		const response = await strapiApi.post(
			ApiStrapiPathes.Registration,
			data
		);
		return response.data;
	} catch (error) {
		handleAxiosError(error);
	}
};
