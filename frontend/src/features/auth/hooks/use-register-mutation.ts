import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.services';
import { TypeRegisterSchema } from '../schemes/form-sing-up-schema';
import { toastMessageHandler } from '@/shared/lib/utils/toast-message.handler';
import { toast } from 'sonner';

export const useRegisterMutation = () => {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register user'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeRegisterSchema;
			recaptcha: string;
		}) => authService.register(values, recaptcha),
		onSuccess(data) {
			toast.success('You have successfully registered', {
				description: data.message,
			});
		},
		onError(err) {
			toastMessageHandler(err);
		},
	});

	return { register, isLoadingRegister };
};
