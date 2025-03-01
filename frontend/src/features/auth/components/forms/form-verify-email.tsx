import { useVerificationMutation } from '../../hooks/use-verification-mutation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button, Card, CardContent } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/shared/config';

interface FormVerifyEmailProps {
	token: string;
}

export const FormVerifyEmail = ({ token }: FormVerifyEmailProps) => {
	const { verification } = useVerificationMutation();
	const router = useRouter();
	const [isVerifying, setIsVerifying] = useState(true);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		verification(token)
			.then(() => setSuccess(true))
			.catch(() => setSuccess(false))
			.finally(() => setIsVerifying(false));
	}, [token, verification]);

	return (
		<Card className="w-full max-w-md mx-auto p-6 text-center">
			<CardContent className="p-0">
				{isVerifying ? (
					<div className="flex flex-col items-center gap-4">
						<Loader2 className="w-6 h-6 animate-spin" />
						<p>Verifying your email, please wait...</p>
					</div>
				) : success ? (
					<div className="flex flex-col gap-4">
						<p>Your email has been successfully verified.</p>
						<Button
							onClick={() => router.replace(AppRoutes.Dashboard)}
						>
							Go to Dashboard
						</Button>
					</div>
				) : (
					<div className="flex flex-col gap-4">
						<p>Email verification failed. Please try again.</p>
						<Button
							onClick={() => router.replace(AppRoutes.SignIn)}
							variant="destructive"
						>
							Go to Sign In
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
