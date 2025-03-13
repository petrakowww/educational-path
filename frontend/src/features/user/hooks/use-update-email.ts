import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ChangeEmailFormValues } from '../schemes/form-change-email';
import { userService } from '../services/user.service';
import { EmailStatus, EmailUpdateProps } from '../types/email.status';
import { UseFormReturn } from 'react-hook-form';

export const useUpdateEmail = (
	callback: (value: boolean) => void,
	form: UseFormReturn<ChangeEmailFormValues>
) => {
	const { mutate: updateEmail, isPending } = useMutation({
		mutationKey: ['update-email'],
		mutationFn: async (
			values: ChangeEmailFormValues
		): Promise<EmailUpdateProps> => {
			return userService.updateEmail({
				oldEmail: values.oldEmail,
				newEmail: values.newEmail,
				code: values.code || undefined,
			});
		},
		onSuccess: (data: EmailUpdateProps) => {
			if (data.status === EmailStatus.send) {
				callback(true);
				toast.success('Код подтверждения отправлен на новый email.');
			} else if (data.status === EmailStatus.access) {
				callback(false);
				form.reset({
					oldEmail: data.email,
					newEmail: '',
					code: '',
				});
				toast.success('Ваша почта была успешно изменена.');
			}
		},
		onError: (error) => {
			toast.error('Ошибка при обновлении email', {
				description: (error as Error).message,
			});
			callback(false);
		},
	});

	return { updateEmail, isPending };
};
