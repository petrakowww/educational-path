import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { passwordRecoveryService } from '../services/password-recovery.service';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { TypeNewPasswordSchema } from '../schemes/form-new-password-schema';
import { AppRoutes } from '@/shared/config';

export function useNewPasswordMutation() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const token = searchParams?.get('token');

	const { mutate: newPassword, isPending: isLoadingNew } = useMutation({
		mutationKey: ['новый пароль'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeNewPasswordSchema;
			recaptcha: string;
		}) => {
			if (!token) {
				throw new Error('Токен не найден');
			}
			return passwordRecoveryService.new(values, token, recaptcha);
		},
		onSuccess() {
			toast.success('Пароль успешно изменен', {
				description: 'Теперь вы можете войти в свой аккаунт.',
			});
			router.replace(AppRoutes.SignIn);
		},
		onError(error) {
			toastMessageHandler(error);
		},
	});

	return { newPassword, isLoadingNew };
}
