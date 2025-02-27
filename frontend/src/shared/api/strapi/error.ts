import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown): string => {
	console.log(error);
	if (error instanceof AxiosError && error.response) {
		return error.response.data?.error?.message || 'Something went wrong';
	}
	return (error as Error)?.message || 'Network error, please try again';
};
