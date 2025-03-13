import { useMutation } from '@tanstack/react-query';
import { verificationService } from '../services/verification.service';
import { toast } from 'sonner';
import { TypeTwoFactorSchema } from '../schemes/form-two-factor-schema';
import { useRouter, useSearchParams } from 'next/navigation';

import { AppRoutes } from '@/shared/config';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const useVerifyTwoFactorMutation = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { login } = useAuth();

	const oauthToken = searchParams?.get('oua');

	const { mutate: verify, isPending: isLoadingVerify } = useMutation({
		mutationKey: ['verify-2FA'],
		mutationFn: ({
			values,
			recaptcha,
		}: {
			values: TypeTwoFactorSchema;
			recaptcha: string;
		}) => {
			if (!oauthToken) {
				throw new Error('Токен не найден');
			}

			return verificationService.verifyTwoFactor(
				values,
				oauthToken,
				recaptcha
			);
		},
		onSuccess() {
			login();
			toast.success('Двухфакторная аутентификация прошла успешно!');
			router.replace(AppRoutes.Dashboard);
		},
		onError(error) {
			toast.error(
				error.message ||
					'Неверный код аутентификации. Пожалуйста, попробуйте снова.'
			);
		},
	});

	return { verify, isLoadingVerify };
};
