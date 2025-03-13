import { z } from 'zod';

export const changeEmailSchema = z.object({
	oldEmail: z.string().email('Старая почта должна быть обязательно указана'),
	newEmail: z.string().email('Введите корректный email.'),
	code: z
		.string()
		.optional()
		.refine((code) => !code || /^\d{6}$/.test(code), {
			message: 'Код должен состоять ровно из 6 цифр',
		}),
});

export type ChangeEmailFormValues = z.infer<typeof changeEmailSchema>;
