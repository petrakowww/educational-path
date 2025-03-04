import { useMutation } from '@tanstack/react-query';
import { verificationService } from '../services/verification.service';
import { toast } from 'sonner';
import { TypeTwoFactorSchema } from '../schemes/form-two-factor-schema';
import { useRouter, useSearchParams } from 'next/navigation';

import { AppRoutes } from '@/shared/config';

export const useVerifyTwoFactorMutation = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const oauthToken = searchParams.get('oua');

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
				throw new Error('token not found');
			}

			return verificationService.verifyTwoFactor(
				values,
				oauthToken,
				recaptcha
			);
		},
		onSuccess() {
			toast.success('Two-factor authentication successful!');
			router.replace(AppRoutes.Dashboard);
		},
		onError(error) {
			toast.error(
				error.message ||
					'Invalid authentication code. Please try again.'
			);
		},
	});

	return { verify, isLoadingVerify };
};
