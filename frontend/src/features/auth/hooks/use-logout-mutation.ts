import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { apiRoutes, AppRoutes } from '@/shared/config';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';

export const useLogoutMutation = () => {
	const router = useRouter();

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['authorization user'],
		mutationFn: () => api.post(apiRoutes.auth.logout),
		onSuccess() {
			toast.success(`Вы успешно вышли из своего аккаунта`, {
				description: 'Мы будем ждать вас снова!',
			});
			router.push(AppRoutes.SignIn);
		},
		onError(err) {
			toastMessageHandler(err);
		},
	});

	return { logout, isLoadingLogout };
};
