'use client';

import { Header } from '@/widgets/ui';
import { FormVerifyEmail } from '@/features/auth/components/forms/form-verify-email';
import { useRouter, useSearchParams } from 'next/navigation';
import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { useEffect } from 'react';
import { AppRoutes } from '@/shared/config';

export default function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	useEffect(() => {
		if (!token) {
			router.replace(AppRoutes.SignIn);
		}
	}, [token, router]);

	if (!token) return null;

	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			<VerifyWrapper
				title="Email Confirmation"
				description="Wait a bit, we'll confirm your email."
				children={<FormVerifyEmail token={token} />}
			/>
		</div>
	);
}
