import { z } from 'zod';

export const formSignUpSchema = z.object({
	username: z
		.string()
		.min(7, { message: 'Username must be at least 7 characters.' }),
	email: z.string().email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.regex(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/,
			{
				message:
					'Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 10 characters.',
			}
		),
});
