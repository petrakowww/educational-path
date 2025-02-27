import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { verifyCodeAndSetSession } from '../api/verify-api';

export const useVerify = (redirectPath: string) => {
	const router = useRouter();

	const mutation = useMutation({
		mutationFn: verifyCodeAndSetSession,
		onSuccess: () => {
			router.push(redirectPath);
		},
	});

	const errorMessage = mutation.error?.message;

	return { mutation, errorMessage };
};
