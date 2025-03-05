import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormNewPassword } from '@/features/auth/components/forms/form-new-password';

export default function Page() {
	return (
		<VerifyWrapper
			title="Setting a new password"
			description="You can enter a new password below."
		>
			<FormNewPassword />
		</VerifyWrapper>
	);
}
