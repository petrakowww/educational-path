import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormNewPassword } from '@/features/auth/components/forms/form-new-password';
import { Header } from '@/widgets/ui';

export default function Page() {
	return (
		<>
			<Header />
			<VerifyWrapper
				title="Setting a new password"
				description="You can enter a new password below."
			>
				<FormNewPassword />
			</VerifyWrapper>
		</>
	);
}
