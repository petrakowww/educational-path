import { api } from '@/shared/api';
import { TypeLoginSchema } from '../schemes/form-sign-in-schema';
import { TypeRegisterSchema } from '../schemes/form-sing-up-schema';
import { UserProps } from '../types/user.type';
import { OTPResponseProps, ResponseProps } from '../types/response.type';
import { ProviderServiceType } from '../types/service.oauth.type';
import { apiRoutes } from '@/shared/config';

export class AuthService {
	public async register(
		body: TypeRegisterSchema,
		recaptcha?: string
	): Promise<ResponseProps> {
		const headers = recaptcha ? { recaptcha } : undefined;

		const response = await api.post<ResponseProps>(
			apiRoutes.auth.register,
			body,
			{
				headers,
			}
		);

		return response;
	}

	public async login(
		body: TypeLoginSchema,
		recaptcha?: string
	): Promise<UserProps | OTPResponseProps> {
		const headers = recaptcha ? { recaptcha } : undefined;

		const response = await api.post<UserProps>(apiRoutes.auth.login, body, {
			headers,
		});

		return response;
	}

	public async oauthByProvider(provider: ProviderServiceType) {
		const response = await api.get<{ url: string }>(
			`${apiRoutes.auth.providerConnect}${provider}`
		);

		return response;
	}

	public async logout() {
		const response = await api.post(apiRoutes.auth.logout);

		return response;
	}

	public async refreshToken() {
		const response = await api.get(apiRoutes.auth.checkSession);
		return response;
	}
}

export const authService = new AuthService();
