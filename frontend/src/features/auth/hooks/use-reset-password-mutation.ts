import { useMutation } from '@tanstack/react-query';
import { TypeResetPasswordSchema } from '../schemes/form-reset-password-schema';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { toast } from 'sonner';
import { passwordRecoveryService } from '../services/password-recovery.service';

export function useResetPasswordMutation() {
	const { mutate: reset, isPending: isLoadingReset } = useMutation({
		mutationKey: ['reset password'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeResetPasswordSchema;
			recaptcha: string;
		}) => passwordRecoveryService.reset(values, recaptcha),
		onSuccess() {
			toast.success('Проверьте свою электронную почту', {
				description:
					'На ваш электронный адрес была отправлена ссылка для подтверждения смены пароля.',
			});
		},
		onError(error) {
			toastMessageHandler(error);
		},
	});

	return { reset, isLoadingReset };
}
