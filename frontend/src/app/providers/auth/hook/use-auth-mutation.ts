import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';

export const useAuthorizationMutation = (
	callback: (value: boolean) => void,
	onComplete: () => void
) => {
	const { mutate: authorization, isPending: isLoadingAuthorization } =
		useMutation({
			mutationKey: ['authorization user'],
			mutationFn: () => api.get(apiRoutes.auth.refreshTokens),
			onSuccess() {
				callback(true);
				onComplete();
			},
			onError() {
				callback(false);
				onComplete();
			},
		});

	return { authorization, isLoadingAuthorization };
};
