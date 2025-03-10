export const filterData = <T extends Record<string, unknown>>(
	data: T
): Partial<T> => {
	return Object.fromEntries(
		Object.entries(data).filter(
			([_, value]) =>
				value !== '' && value !== null && value !== undefined
		)
	) as Partial<T>;
};
