import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';
import { cookieClient } from '@/shared/lib/utils/cookie.client';

export const useAuthorizationMutation = () => {
	const { mutate: authorization, isPending: isLoadingAuthorization } =
		useMutation({
			mutationKey: ['authorization user'],
			mutationFn: () => api.get(apiRoutes.auth.refreshTokens),
			onError() {
				cookieClient.logout();
			},
		});

	return { authorization, isLoadingAuthorization };
};
