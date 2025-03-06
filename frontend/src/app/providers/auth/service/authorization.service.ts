import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';

export class AuthorizationService {
	public async authorization(): Promise<boolean> {
		return await api.post(apiRoutes.auth.checkSession);
	}
}

export const authorizationService = new AuthorizationService();