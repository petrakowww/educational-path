import { FormVerifyEmail } from '@/features/auth/components/forms/form-verify-email';
import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';

export default function Page() {
	return (
		<VerifyWrapper
			title="Подтверждение по электронной почте"
			description="Подождите немного, мы подтвердим ваш адрес электронной почты."
		>
			<FormVerifyEmail />
		</VerifyWrapper>
	);
}
