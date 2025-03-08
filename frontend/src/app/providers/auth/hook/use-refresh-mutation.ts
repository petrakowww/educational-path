import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';
import { cookieClient } from '@/shared/lib/utils/cookie.client';

export const useAuthorizationMutation = (
	callback: (value: boolean) => void
) => {
	const { mutate: authorization, isPending: isLoadingAuthorization } =
		useMutation({
			mutationKey: ['authorization user'],
			mutationFn: () => api.get(apiRoutes.auth.refreshTokens),
			onSuccess() {
				callback(true);
			},
			onError() {
				callback(false);

				cookieClient.logout();
			},
		});

	return { authorization, isLoadingAuthorization };
};
