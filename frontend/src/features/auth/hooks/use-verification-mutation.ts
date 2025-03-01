import { useMutation } from '@tanstack/react-query';
import { verificationService } from '../services/verification.service';
import { toast } from 'sonner';

export const useVerificationMutation = () => {
  const { mutateAsync: verification } = useMutation({
    mutationKey: ['new verification'],
    mutationFn: (token: string | null) =>
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
