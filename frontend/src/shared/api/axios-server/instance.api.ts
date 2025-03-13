import { AxiosClient } from '@/shared/lib/utils/axios-client';

export const api = new AxiosClient({
	baseUrl: process.env.SERVER_URL as string,
	headers: {
		'Content-Type': 'application/json',
	},
});
