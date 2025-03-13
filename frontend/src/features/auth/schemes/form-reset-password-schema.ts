import { z } from 'zod';

export const formResetPasswordSchema = z.object({
	email: z.string().email({
		message: 'Неправильно введенный адрес электронной почты.',
	}),
});

export type TypeResetPasswordSchema = z.infer<typeof formResetPasswordSchema>;
