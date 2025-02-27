import { z } from 'zod';

export const formSignInSchema = z.object({
	identifier: z
		.string()
		.min(1, { message: 'Username or Email is required.' })
		.refine((value) => value.includes('@') || value.length >= 7, {
			message: 'Must be a valid email or at least 7 characters username.',
		}),
	password: z.string().min(10, {
		message: "Incorrect password, the password can't be that long.",
	}),
});
