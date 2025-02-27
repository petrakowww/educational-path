import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signUpRequest } from '../api/signup-api';
import { AppRoutes } from '@/shared/config';

export const useRegistration = (redirectPath: AppRoutes) => {
	const router = useRouter();

	const mutation = useMutation({
		mutationFn: signUpRequest,
		onSuccess: () => {
			router.push(redirectPath);
		},
	});

	const errorMessage = mutation.error?.message;

	return { mutation, errorMessage };
};
