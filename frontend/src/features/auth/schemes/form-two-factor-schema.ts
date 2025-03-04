import { z } from 'zod';

export const formTwoFactorSchema = z.object({
	code: z
		.string()
		.length(6, 'Code must be exactly 6 characters')
		.regex(/^\d{6}$/, 'Code must be numeric'),
});


export type TypeTwoFactorSchema = z.infer<typeof formTwoFactorSchema>;