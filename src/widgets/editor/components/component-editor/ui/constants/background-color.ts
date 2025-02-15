import { BackgroundColorEnum } from "@/shared/lib/node/component";

export const BackgroundColorConstant = {
	first: [
		{ title: 'PR', value: BackgroundColorEnum.Primary },
		{ title: 'SR', value: BackgroundColorEnum.Secondary },
		{ title: 'HL', value: BackgroundColorEnum.Highlight },
		{ title: 'MT', value: BackgroundColorEnum.Muted },
		{ title: 'ER', value: BackgroundColorEnum.Error },
	],
	second: [
		{ title: 'WR', value: BackgroundColorEnum.Warning },
		{ title: 'IF', value: BackgroundColorEnum.Info },
		{ title: 'DS', value: BackgroundColorEnum.Disabled },
		{ title: 'W', value: BackgroundColorEnum.White },
		{ title: 'B', value: BackgroundColorEnum.Black },
	],
};
