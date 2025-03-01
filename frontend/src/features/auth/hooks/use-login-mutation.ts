import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.services';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { toast } from 'sonner';
import { TypeLoginSchema } from '../schemes/form-sign-in-schema';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/shared/config';

export const useLoginMutation = () => {
	const router = useRouter();

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeLoginSchema;
			recaptcha: string;
		}) => authService.login(values, recaptcha),
		onSuccess() {
			toast.success(
				`You have successfully logged in your account`,
				{
					description: 'Have a nice time :)',
				}
			);
			router.push(AppRoutes.Dashboard);
		},
		onError(err) {
			toastMessageHandler(err);
		},
	});

	return { login, isLoadingLogin };
};
