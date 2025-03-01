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

	const token = searchParams.get('token');

	const { mutate: newPassword, isPending: isLoadingNew } = useMutation({
		mutationKey: ['new password'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeNewPasswordSchema;
			recaptcha: string;
		}) => passwordRecoveryService.new(values, token, recaptcha),
		onSuccess() {
			toast.success('Password changed successfully', {
				description: 'Now you can log in to your account.',
			});
			router.replace(AppRoutes.SignIn);
		},
		onError(error) {
			toastMessageHandler(error);
		},
	});

	return { newPassword, isLoadingNew };
}
