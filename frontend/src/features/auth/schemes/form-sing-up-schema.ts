import { z } from 'zod';

export const formSignUpSchema = z
	.object({
		name: z
			.string()
			.min(3, { message: 'Username must be at least 3 characters long.' })
			.regex(/^[a-zA-Z0-9_]+$/, {
				message:
					'Username can only contain letters, numbers, and underscores',
			}),
		email: z.string().email({ message: 'Invalid email address.' }),
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
		message: 'Passwords do not match.',
		path: ['passwordRepeat'],
	});

export type TypeRegisterSchema = z.infer<typeof formSignUpSchema>;
