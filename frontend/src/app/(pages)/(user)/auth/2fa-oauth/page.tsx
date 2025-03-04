import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { Header } from '@/widgets/ui';
import { FormTwoFactorAuth } from '@/features/auth/components/forms/form-otp-code';
export default function Page() {
	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			<VerifyWrapper
				title="Enter the OTP code"
				description="You have set up OTP authorization for this account, enter the code to continue."
			>
				<FormTwoFactorAuth />
			</VerifyWrapper>
		</div>
	);
}
