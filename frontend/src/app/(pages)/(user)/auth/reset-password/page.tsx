import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormResetPassword } from '@/features/auth/components/forms/form-reset-password';

export default function Page() {
	return (
		<VerifyWrapper
			title="Password Reset"
			description="Click continue if you need to reset your password."
		>
			<FormResetPassword />
		</VerifyWrapper>
	);
}
