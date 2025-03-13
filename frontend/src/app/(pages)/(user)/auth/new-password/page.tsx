import { VerifyWrapper } from '@/features/auth/components/wrapper/verify-wrapper';
import { FormNewPassword } from '@/features/auth/components/forms/form-new-password';

export default function Page() {
	return (
		<VerifyWrapper
			title="Установка нового пароля"
			description="Вы можете ввести новый пароль ниже."
		>
			<FormNewPassword />
		</VerifyWrapper>
	);
}
