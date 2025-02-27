import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authentificationRequest } from '../api/signin-api';
import { AppRoutes } from '@/shared/config';

export const useLogin = (verifyPath: AppRoutes) => {
	const router = useRouter();

	const mutation = useMutation({
		mutationFn: authentificationRequest,
		onSuccess: () => {
			router.push(verifyPath);
		},
	});

	const errorMessage = mutation.error?.message;

	return { mutation, errorMessage };
};
