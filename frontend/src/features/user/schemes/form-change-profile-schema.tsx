import { z } from 'zod';

export const profileSchema = z.object({
	profilename: z
		.string()
		.min(3, {
			message: 'Имя профиля должно содержать не менее 3 символов.',
		})
		.regex(/^[\p{L}\p{N}_ ]+$/u, {
			message:
				'Имя профиля может содержать только буквы, цифры, подчеркивания и пробелы.',
		})
		.optional(),
	name: z
		.string()
		.min(2, {
			message: 'Имя пользователя должно содержать не менее 2 символов.',
		})
		.regex(/^[\p{L}\p{N}_ ]+$/u, {
			message:
				'Имя может содержать только буквы, цифры, подчеркивания и пробелы.',
		}),
	headline: z
		.string()
		.max(600, {
			message:
				'Вы превысили максимальную длину краткого описания вашего профиля (600 символов)',
		})
		.optional(),
	telegram: z
		.string()
		.regex(/^@[\w\d_]{3,32}$/, {
			message:
				'Введите корректный Telegram username (пример: @username).',
		})
		.optional()
		.or(z.literal('')),
	github: z
		.string()
		.url({
			message:
				'Введите корректный URL GitHub (пример: https://github.com/username).',
		})
		.regex(/^https:\/\/github\.com\/[\w\d-]+$/, {
			message:
				'Ссылка должна вести на GitHub профиль (пример: https://github.com/username).',
		})
		.optional()
		.or(z.literal('')),
	vk: z
		.string()
		.url({
			message:
				'Введите корректный URL ВКонтакте (пример: https://vk.com/username).',
		})
		.regex(/^https:\/\/vk\.com\/[\w\d-]+$/, {
			message:
				'Ссылка должна вести на VK профиль (пример: https://vk.com/username).',
		})
		.optional()
		.or(z.literal('')),
	avatar: z
		.string()
		.regex(/^data:image\/(jpeg|jpg|png|gif|webp);base64,/, {
			message: 'Аватар должен быть корректным изображением в Base64.',
		})
		.optional()
        .or(z.literal('')),
});

export type TypeChangeProfileSchema = z.infer<typeof profileSchema>;
