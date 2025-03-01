'use client';

import { Header } from '@/widgets/ui';
import { AppRoutes } from '@/shared/config';
import { AuthPage } from '@/features/auth/components/wrapper/auth-wrapper';
import { FormSignIn } from '@/features/auth';

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			<AuthPage
				title="Sign in"
				description="Welcome back! Let's take you to your account."
				formComponent={<FormSignIn />}
				redirectText="Don't have an account?"
				redirectHref={AppRoutes.SignUp}
				redirectLabel="Sign Up"
			/>
		</div>
	);
}
