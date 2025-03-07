import { api } from '@/shared/api';
import { TypeResetPasswordSchema } from '../schemes/form-reset-password-schema';
import { UserProps } from '../types/user.type';
import { TypeNewPasswordSchema } from '../schemes/form-new-password-schema';
import { apiRoutes } from '@/shared/config';

class PasswordRecoveryService {
	public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined;

		const response = await api.post<UserProps>(
			`${apiRoutes.auth.passwordReset}`,
			body,
			{
				headers,
			}
		);

		return response;
	}

	public async new(
		body: TypeNewPasswordSchema,
		token: string | null,
		recaptcha?: string
	) {
		const headers = recaptcha ? { recaptcha } : undefined;

		const response = await api.post<UserProps>(
			`${apiRoutes.auth.passwordNew}${token}`,
			body,
			{
				headers,
			}
		);

		return response;
	}
}

export const passwordRecoveryService = new PasswordRecoveryService();
