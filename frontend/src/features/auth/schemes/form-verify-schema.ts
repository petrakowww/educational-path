import { z } from 'zod';

export const formVerifySchema = z.object({
	code: z
		.string()
		.length(6, 'Код должен состоять ровно из 6 символов')
		.regex(/^\d{6}$/, 'Код должен быть числовым'),
	email: z.string().email(),
	type: z.string().min(3),
});
