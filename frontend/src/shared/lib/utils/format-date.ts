export const formatDate = (dateString: string | Date): string => {
	const date =
		typeof dateString === 'string' ? new Date(dateString) : dateString;

	if (isNaN(date.getTime())) {
		return 'Неверная дата';
	}

	return date.toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
