import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { verifyCodeRequest } from '../api/verify-api';

export const useVerify = (redirectPath: string) => {
	const router = useRouter();

	const mutation = useMutation({
		mutationFn: verifyCodeRequest,
		onSuccess: () => {
			router.push(redirectPath);
		},
	});

	const errorMessage = mutation.error?.message;

	return { mutation, errorMessage, resendCode };
};
