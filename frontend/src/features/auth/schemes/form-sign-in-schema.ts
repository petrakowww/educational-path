import { z } from 'zod';

export const formSignInSchema = z.object({
	email: z.string().email({ message: 'Проверьте правильность отправки письма.' }),
	password: z
		.string()
		.min(10, {
			message: 'Длина пароля должна составлять не менее 10 символов.',
		})
		.regex(/(?=.*\p{Lu})(?=.*\d)/u, {
			message:
				'Пароль должен содержать не менее 10 символов, по крайней мере, 1 заглавную букву и 1 цифру.',
		}),
	code: z.string().optional(),
});

export type TypeLoginSchema = z.infer<typeof formSignInSchema>;
