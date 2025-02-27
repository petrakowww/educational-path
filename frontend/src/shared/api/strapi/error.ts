import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown): never => {
	if (error instanceof AxiosError && error.response) {
		throw new Error(
			error.response.data?.error?.message || 'Something went wrong'
		);
	}
	throw new Error('Network error. Please try again.');
};
