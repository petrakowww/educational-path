import { z } from 'zod';

export const changePasswordSchema = z
	.object({
		oldPassword: z
			.string()
			.min(10, 'Старый пароль должен содержать не менее 10 символов.')
			.optional()
            .or(z.literal('')),
		newPassword: z
			.string()
			.min(10, 'Пароль должен содержать не менее 10 символов.')
			.regex(/(?=.*\p{Lu})(?=.*\d)/u, {
				message:
					'Пароль должен содержать не менее 10 символов, включать хотя бы 1 заглавную букву и 1 цифру.',
			}),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Пароли не совпадают.',
		path: ['confirmPassword'],
	});

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
