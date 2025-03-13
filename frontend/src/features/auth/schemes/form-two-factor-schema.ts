import { z } from 'zod';

export const formTwoFactorSchema = z.object({
	code: z
		.string()
		.length(6, 'Код должен состоять ровно из 6 символов')
		.regex(/^\d{6}$/, 'Код должен быть числовым'),
});

export type TypeTwoFactorSchema = z.infer<typeof formTwoFactorSchema>;
