import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';
import { EmailUpdateProps } from '../types/email.status';

export class UserService {
	public async changePassword(data: {
		oldPassword: string;
		newPassword: string;
		newPasswordRepeat: string;
	}) {
		return api.post(apiRoutes.user.updatePassword, data);
	}

	public async updateEmail(data: {
		oldEmail?: string;
		newEmail?: string;
		code?: string;
	}): Promise<EmailUpdateProps> {
		return api.patch(apiRoutes.user.updateEmail, data);
	}
}

export const userService = new UserService();
