'use client';

import { AppRoutes } from '@/shared/config';
import { AuthPage } from '@/features/auth/components/wrapper/auth-wrapper';
import { FormSignIn } from '@/features/auth';

export default function Page() {
	return (
		<AuthPage
			title="Войдите в систему"
			description="Добро пожаловать обратно! Давайте перейдем к вашему аккаунту."
			formComponent={<FormSignIn />}
			redirectText="У вас нет учетной записи?"
			redirectHref={AppRoutes.SignUp}
			redirectLabel="Зарегистрироваться"
		/>
	);
}
