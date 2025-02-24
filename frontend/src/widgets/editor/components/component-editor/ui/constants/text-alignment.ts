import {
	TextAlignmentEnum,
	TextVerticalAlignmentEnum,
} from '@/shared/lib/node/component';

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

export const TextAlignmentConstant = [
	{ TitleIcon: AlignLeftIcon, value: TextAlignmentEnum.Start },
	{ TitleIcon: AlignRightIcon, value: TextAlignmentEnum.End },
	{ TitleIcon: AlignCenterIcon, value: TextAlignmentEnum.Center },
	{ TitleIcon: AlignJustifyIcon, value: TextAlignmentEnum.Justify },
];

export const TextVerticalAlignmentConstant = [
	{
		TitleVerticalIcon: AlignVerticalDistributeStartIcon,
		value: TextVerticalAlignmentEnum.Top,
	},
	{
		TitleVerticalIcon: AlignVerticalDistributeEndIcon,
		value: TextVerticalAlignmentEnum.Bottom,
	},
	{
		TitleVerticalIcon: AlignVerticalDistributeCenterIcon,
		value: TextVerticalAlignmentEnum.Middle,
	},
	{ TitleVerticalIcon: MinusIcon, value: TextVerticalAlignmentEnum.Baseline },
];
