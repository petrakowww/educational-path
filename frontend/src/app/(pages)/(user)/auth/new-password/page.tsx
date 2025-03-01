
import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { Header } from '@/widgets/ui';
import { FormNewPassword } from '@/features/auth/components/forms/form-new-password';
export default function Page() {
	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			<VerifyWrapper
				title="Setting a new password"
				description="You can enter a new password below."
			>
				<FormNewPassword />
			</VerifyWrapper>
		</div>
	);
}
