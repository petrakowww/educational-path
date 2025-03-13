import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { apiRoutes, AppRoutes } from '@/shared/config';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const useLogoutMutation = () => {
	const router = useRouter();
	const { logout } = useAuth();

	const { mutate: logoutMutation, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['authorization user'],
		mutationFn: () => api.post(apiRoutes.auth.logout),
		onSuccess() {
			logout();
			toast.success(`Вы успешно вышли из своего аккаунта`, {
				description: 'Мы будем ждать вас снова!',
			});
			router.push(AppRoutes.SignIn);
		},
		onError(err) {
			toastMessageHandler(err);
		},
	});

	return { logoutMutation, isLoadingLogout };
};
