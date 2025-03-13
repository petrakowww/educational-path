import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormResetPassword } from '@/features/auth/components/forms/form-reset-password';

export default function Page() {
	return (
		<VerifyWrapper
			title="Сброс пароля"
			description="Нажмите продолжить, если вам нужно сбросить свой пароль."
		>
			<FormResetPassword />
		</VerifyWrapper>
	);
}
