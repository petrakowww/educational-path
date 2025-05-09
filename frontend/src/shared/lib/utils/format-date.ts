export const formatDate = (dateString: string | Date, fallback = 'Неверная дата'): string => {
	const date =
		typeof dateString === 'string' ? new Date(dateString) : dateString;

	if (isNaN(date.getTime())) {
		return fallback;
	}

	return date.toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
