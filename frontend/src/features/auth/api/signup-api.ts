import { z } from 'zod';
import { strapiApi } from '@/shared/api';
import { formSignUpSchema } from '../schemes/form-sing-up-schema';
import { AxiosError } from 'axios';

export const signUpRequest = async (data: z.infer<typeof formSignUpSchema>) => {
	try {
		const response = await strapiApi.post('/auth/local/register', data);
		return response.data;
	} catch (error) {
		console.log(error);
		if (error instanceof AxiosError && error.response) {
			throw new Error(
				error.response.data?.error?.message || 'Something went wrong'
			);
		}
		throw new Error('Network error. Please try again.');
	}
};
