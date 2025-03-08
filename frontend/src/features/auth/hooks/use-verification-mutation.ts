import { useMutation } from '@tanstack/react-query';
import { verificationService } from '../services/verification.service';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
export const useVerificationMutation = () => {
	const searchParams = useSearchParams();
	const token = searchParams?.get('token');

	const { mutateAsync: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: () => {
			if (!token) {
				throw new Error('Токен не найден');
			}
			return verificationService.newVerification(token);
		},
		onSuccess() {
			toast.success('Ваш адрес электронной почты был успешно подтвержден!');
		},
		onError() {
			toast.error('Не удалось подтвердить адрес электронной почты. Пожалуйста, попробуйте снова.');
		},
	});

	return { verification };
};
