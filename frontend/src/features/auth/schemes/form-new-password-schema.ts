import { z } from 'zod';

export const formNewPasswordSchema = z
	.object({
		password: z
			.string()
			.min(10, {
				message: 'Password must be at least 10 characters long.',
			})
			.regex(/^(?=.*[A-Z])(?=.*\d).{10,}$/, {
				message:
					'Password must be at least 10 characters long, contain at least 1 uppercase letter, and 1 number.',
			}),
		passwordRepeat: z.string(),
	})
	.refine((data) => data.password === data.passwordRepeat, {
		message: 'Passwords do not match',
		path: ['passwordRepeat'],
	});

export type TypeNewPasswordSchema = z.infer<typeof formNewPasswordSchema>;
