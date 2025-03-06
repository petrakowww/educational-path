import { useMutation } from '@tanstack/react-query';
import { authorizationService } from '../service/authorization.service';

export const useAuthMutation = (
	callback: (value: boolean) => void,
	onComplete: () => void
) => {
	const { mutate: authorization, isPending: isLoadingAuthorization } =
		useMutation({
			mutationKey: ['authorization user'],
			mutationFn: () => authorizationService.authorization(),
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
