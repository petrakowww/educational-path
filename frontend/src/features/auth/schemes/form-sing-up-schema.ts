import { z } from 'zod';

export const formSignUpSchema = z
	.object({
		name: z
			.string()
			.min(3, { message: 'Имя пользователя должно содержать не менее 3 символов.' })
			.regex(/^[\p{L}\p{N}_ ]+$/u, {
				message:
					'Имя может содержать только буквы, цифры, подчеркивания и пробелы',
			}),
		email: z.string().email({ message: 'Неверный адрес электронной почты.' }),
		password: z
			.string()
			.min(10, {
				message: 'Пароль должен содержать не менее 10 символов.',
			})
			.regex(/(?=.*\p{Lu})(?=.*\d)/u, {
				message:
					'Пароль должен содержать не менее 10 символов, включать хотя бы 1 заглавную букву и 1 цифру.',
			}),
		passwordRepeat: z.string(),
	})
	.refine((data) => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают.',
		path: ['passwordRepeat'],
	});

export type TypeRegisterSchema = z.infer<typeof formSignUpSchema>;
