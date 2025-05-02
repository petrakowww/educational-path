import { BackgroundColorsEnum } from "../editor/types/colors";
import { BorderRadiusEnum } from "../editor/types/styles";

export const BackgroundColorConstant = {
	firstLine: [
		{ title: 'PR', value: BackgroundColorsEnum.Primary },
		{ title: 'SR', value: BackgroundColorsEnum.Secondary },
		{ title: 'HL', value: BackgroundColorsEnum.Highlight },
		{ title: 'MT', value: BackgroundColorsEnum.Muted },
		{ title: 'ER', value: BackgroundColorsEnum.Error },
	],
	secondLine: [
		{ title: 'WR', value: BackgroundColorsEnum.Warning },
		{ title: 'IF', value: BackgroundColorsEnum.Info },
		{ title: 'DS', value: BackgroundColorsEnum.Disabled },
		{ title: 'W', value: BackgroundColorsEnum.White },
		{ title: 'B', value: BackgroundColorsEnum.Black },
	],
};

export const BlockBorderRadius = [
	{ title: 'None', value: BorderRadiusEnum.None },
	{ title: 'XS', value: BorderRadiusEnum.XS },
	{ title: 'SM', value: BorderRadiusEnum.SM },
	{ title: 'MD', value: BorderRadiusEnum.MD },
	{ title: 'LG', value: BorderRadiusEnum.LG },
	{ title: 'XL', value: BorderRadiusEnum.XL },
];

