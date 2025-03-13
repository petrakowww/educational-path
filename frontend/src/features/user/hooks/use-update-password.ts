import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ChangePasswordFormValues } from '../schemes/form-change-password';
import { userService } from '../services/user.service';

export const useChangePassword = (passwordCallback: (value: boolean) => void) => {
	const { mutate: changePassword, isPending } = useMutation({
		mutationKey: ['change-password'],
		mutationFn: async (values: ChangePasswordFormValues) => {
			await userService.changePassword({
				oldPassword: values.oldPassword || '',
				newPassword: values.newPassword,
				newPasswordRepeat: values.confirmPassword,
			});
		},
		onSuccess: () => {
			toast.success('Пароль был успешно изменён');
			passwordCallback(true);
		},
		onError: (error) => {
			toast.error('Ошибка при обновлении пароля', {
				description: (error as Error).message,
			});
		},
	});

	return { changePassword, isPending };
};
