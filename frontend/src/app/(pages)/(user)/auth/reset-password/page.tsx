import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormResetPassword } from '@/features/auth/components/forms/form-reset-password';
import { Header } from '@/widgets/ui';

export default function Page() {
	return (
		<>
			<Header/>
			<VerifyWrapper
				title="Password Reset"
				description="Click continue if you need to reset your password."
			>
				<FormResetPassword />
			</VerifyWrapper>
		</>
		
	);
}
