'use client';

import { AppRoutes } from '@/shared/config';
import { AuthPage } from '@/features/auth/components/wrapper/auth-wrapper';
import { FormSignIn } from '@/features/auth';
import { Header } from '@/widgets/ui';

export default function Page() {
	return (
		<>
			<Header />
			<AuthPage
				title="Sign in"
				description="Welcome back! Let's take you to your account."
				formComponent={<FormSignIn />}
				redirectText="Don't have an account?"
				redirectHref={AppRoutes.SignUp}
				redirectLabel="Sign Up"
			/>
		</>
	);
}
