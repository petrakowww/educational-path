import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.service';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { toast } from 'sonner';
import { TypeLoginSchema } from '../schemes/form-sign-in-schema';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/shared/config';
import { OTPResponseProps } from '../types/response.type';
import { UserProps } from '../types/user.type';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const useLoginMutation = (callback: (value: boolean) => void) => {
	const router = useRouter();
	const { login } = useAuth(); // login из контекста

	const otpHandler = (value: boolean) => {
		callback(value);
	};

	const { mutate: executeLogin, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeLoginSchema;
			recaptcha: string;
		}) => authService.login(values, recaptcha),
		onSuccess(data?: UserProps | OTPResponseProps) {
			if (data && 'oauthErrorMessage' in data) {
				toastMessageHandler({
					message: data.oauthErrorMessage as string,
				});
				return;
			}
			if (data && 'message' in data && 'otpResponse' in data) {
				toastMessageHandler(data);
				otpHandler(data.otpResponse);
				return;
			}
			login(); // контекстный login
			toast.success(`Вы успешно вошли в свой аккаунт`, {
				description: 'Удачного времяпровождения :)',
			});
			router.push(AppRoutes.Home);
		},
		onError(err) {
			toastMessageHandler(err);
		},
	});

	return { login: executeLogin, isLoadingLogin };
};

