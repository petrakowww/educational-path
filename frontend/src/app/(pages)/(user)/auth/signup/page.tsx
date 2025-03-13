'use client';

import { FormSignUp } from '@/features/auth';
import { AppRoutes } from '@/shared/config';
import { AuthPage } from '@/features/auth/components/wrapper/auth-wrapper';

export default function Page() {
	return (
		<AuthPage
			title="Зарегистрироваться в системе"
			description="Создайте учетную запись и начните работать с образовательными картами: изучайте готовые рисунки или создавайте свои собственные с заданиями и тестами!"
			formComponent={<FormSignUp />}
			redirectText="У вас уже есть учетная запись?"
			redirectHref={AppRoutes.SignIn}
			redirectLabel="Войти в систему"
		/>
	);
}
