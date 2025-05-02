import {
	AlignLeftIcon,
	AlignRightIcon,
	AlignCenterIcon,
	AlignJustifyIcon,
	AlignVerticalDistributeCenterIcon,
	AlignVerticalDistributeEndIcon,
	AlignVerticalDistributeStartIcon,
	MinusIcon,
} from 'lucide-react';
import {
	JustificationEnum,
	TextAlignmentEnum,
	TextFontSizeEnum,
	TextFontWeightEnum,
} from '../editor/types/styles';
import { TextFontColorsEnum } from '../editor/types/colors';

export const HorizontalTextAlignmentOptions = [
	{ Icon: AlignLeftIcon, value: TextAlignmentEnum.Start },
	{ Icon: AlignRightIcon, value: TextAlignmentEnum.End },
	{ Icon: AlignCenterIcon, value: TextAlignmentEnum.Center },
	{ Icon: AlignJustifyIcon, value: TextAlignmentEnum.Justify },
];

export const VerticalTextAlignmentOptions = [
	{
		Icon: AlignVerticalDistributeStartIcon,
		value: JustificationEnum.Top,
	},
	{
		Icon: AlignVerticalDistributeEndIcon,
		value: JustificationEnum.Bottom,
	},
	{
		Icon: AlignVerticalDistributeCenterIcon,
		value: JustificationEnum.Middle,
	},
	{ Icon: MinusIcon, value: JustificationEnum.Baseline },
];

export const TextFontWeightConstant = [
	{ title: 300, value: TextFontWeightEnum.Light },
	{ title: 400, value: TextFontWeightEnum.Regular },
	{ title: 500, value: TextFontWeightEnum.Medium },
	{ title: 600, value: TextFontWeightEnum.SemiBold },
	{ title: 700, value: TextFontWeightEnum.Bold },
	{ title: 800, value: TextFontWeightEnum.ExtraBold },
];

export const TextFontSizeConstant = [
	{ title: 'S', value: TextFontSizeEnum.S },
	{ title: 'M', value: TextFontSizeEnum.M },
	{ title: 'L', value: TextFontSizeEnum.L },
	{ title: 'XL', value: TextFontSizeEnum.XL },
	{ title: 'XXL', value: TextFontSizeEnum.XXL },
];

export const TextFontColorConstant = {
	firstLine: [
		{ title: 'PR', value: TextFontColorsEnum.Primary },
		{ title: 'SR', value: TextFontColorsEnum.Secondary },
		{ title: 'HL', value: TextFontColorsEnum.Highlight },
		{ title: 'MT', value: TextFontColorsEnum.Muted },
		{ title: 'ER', value: TextFontColorsEnum.Error },
	],
	secondLine: [
		{ title: 'WR', value: TextFontColorsEnum.Warning },
		{ title: 'IF', value: TextFontColorsEnum.Info },
		{ title: 'DS', value: TextFontColorsEnum.Disabled },
		{ title: 'W', value: TextFontColorsEnum.White },
		{ title: 'B', value: TextFontColorsEnum.Black },
	],
};
