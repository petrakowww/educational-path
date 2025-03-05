'use client';

import { FormVerifyEmail } from '@/features/auth/components/forms/form-verify-email';
import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';

export default function Page() {
	return (
		<VerifyWrapper
				title="Email Confirmation"
				description="Wait a bit, we'll confirm your email."
			>
				<FormVerifyEmail />
			</VerifyWrapper>
	);
}
