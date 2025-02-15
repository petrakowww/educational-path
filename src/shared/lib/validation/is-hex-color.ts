export const isHexColor = (color: string): boolean => {
	const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/i;
	return hexPattern.test(color);
};
