import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormTwoFactorAuth } from '@/features/auth/components/forms/form-otp-code';

export default function Page() {
	return (
		<VerifyWrapper
			title="Введите OTP-код"
			description="Вы настроили OTP-авторизацию для этой учетной записи, введите код для продолжения."
		>
			<FormTwoFactorAuth />
		</VerifyWrapper>
	);
}
