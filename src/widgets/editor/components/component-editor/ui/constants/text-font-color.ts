import { TextFontColorEnum } from '@/shared/lib/node/component';

export const TextFontColorConstant = {
	first: [
		{ title: 'PR', value: TextFontColorEnum.Primary },
		{ title: 'SR', value: TextFontColorEnum.Secondary },
		{ title: 'HL', value: TextFontColorEnum.Highlight },
		{ title: 'MT', value: TextFontColorEnum.Muted },
		{ title: 'ER', value: TextFontColorEnum.Error },
	],
	second: [
		{ title: 'WR', value: TextFontColorEnum.Warning },
		{ title: 'IF', value: TextFontColorEnum.Info },
		{ title: 'DS', value: TextFontColorEnum.Disabled },
		{ title: 'W', value: TextFontColorEnum.White },
		{ title: 'B', value: TextFontColorEnum.Black },
	],
};
