import { z } from 'zod';

export const formSchema = z.object({
	title: z.string().min(1, 'Название обязательно'),
	description: z.string().optional().nullable(),
	tagIds: z
		.array(z.string().min(1))
		.max(5, 'Не более 5 тегов')
		.optional()
		.nullable(),
});

export type CreateRouteSchema = z.infer<typeof formSchema>;
