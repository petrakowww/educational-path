'use client';

import { FormSignUp } from '@/features/auth';
import { AppRoutes } from '@/shared/config';
import { AuthPage } from '@/features/auth/components/wrapper/auth-wrapper';

export default function Page() {
	return (
		<AuthPage
			title="Sign up"
			description="Create an account and start working with educational maps: explore ready-made routes or create your own with tasks and tests!"
			formComponent={<FormSignUp />}
			redirectText="Already have an account?"
			redirectHref={AppRoutes.SignIn}
			redirectLabel="Sign In"
		/>
	);
}
