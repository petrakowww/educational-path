import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { Header } from '@/widgets/ui';
import { FormResetPassword } from '@/features/auth/components/forms/form-reset-password';

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			<VerifyWrapper
				title="Password Reset"
				description="Click continue if you need to reset your password."
			>
				<FormResetPassword />
			</VerifyWrapper>
		</div>
	);
}
