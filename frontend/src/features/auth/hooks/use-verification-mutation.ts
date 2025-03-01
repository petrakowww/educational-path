import { useMutation } from '@tanstack/react-query';
import { verificationService } from '../services/verification.service';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
export const useVerificationMutation = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const { mutateAsync: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: () =>
			verificationService.newVerification(token),
		onSuccess() {
			toast.success('Your email has been successfully confirmed!');
		},
		onError() {
			toast.error('Email verification failed. Please try again.');
		},
	});

	return { verification };
};
