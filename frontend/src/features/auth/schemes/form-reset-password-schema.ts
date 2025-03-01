import { z } from 'zod';

export const formResetPasswordSchema = z.object({
	email: z.string().email({
		message: 'Incorrectly entered email address',
	}),
});

export type TypeResetPasswordSchema = z.infer<typeof formResetPasswordSchema>;
