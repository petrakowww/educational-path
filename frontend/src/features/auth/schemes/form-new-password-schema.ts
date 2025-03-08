import { z } from 'zod';

export const formNewPasswordSchema = z
	.object({
		password: z
			.string()
			.min(10, {
				message: 'Пароль должен содержать как минимум 10 символов.',
			})
			.regex(/(?=.*\p{Lu})(?=.*\d)/u, {
				message:
					'Пароль должен содержать как минимум 10 символов, включать хотя бы 1 заглавную букву и 1 цифру.',
			}),
		passwordRepeat: z.string(),
	})
	.refine((data) => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают.',
		path: ['passwordRepeat'],
	});

export type TypeNewPasswordSchema = z.infer<typeof formNewPasswordSchema>;
