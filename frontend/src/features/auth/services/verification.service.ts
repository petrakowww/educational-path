import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';
import { TypeTwoFactorSchema } from '../schemes/form-two-factor-schema';

export class VerificationService {
	public async newVerification(token: string | null) {
		const response = await api.post(apiRoutes.auth.emailConfirmation, {
			token,
		});

		return response;
	}

	public async verifyTwoFactor(
		values: TypeTwoFactorSchema,
		oauthToken: string,
		recaptcha: string
	) {
		const headers = recaptcha ? { recaptcha } : undefined;
        
		const response = await api.post(
			`${apiRoutes.auth.twoFactorVerification}${oauthToken}`,
			values,
			{
				headers,
			}
		);

		return response;
	}
}

export const verificationService = new VerificationService();
