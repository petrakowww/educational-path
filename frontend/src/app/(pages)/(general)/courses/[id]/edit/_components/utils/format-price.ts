export function formatPrice(value: number, currency: string = 'RUB'): string {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(value);
}