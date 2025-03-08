import { FormVerifyEmail } from '@/features/auth/components/forms/form-verify-email';
import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { Header } from '@/widgets/ui';

export default function Page() {
	return (
		<>
			<Header isHiddenSignProps={true}/>
			<VerifyWrapper
				title="Email Confirmation"
				description="Wait a bit, we'll confirm your email."
			>
				<FormVerifyEmail />
			</VerifyWrapper>
		</>
	);
}
