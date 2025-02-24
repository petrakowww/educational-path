import { TextFontWeightEnum } from '../../constants/enum-font-weight';
import {
	GraphNodeFontProps,
	GraphNodeFontSizeProps,
	GraphNodeFontWeightProps,
	GraphNodeFontColorProps,
} from '../../interfaces/auxiliary/type-font';

export const initFontSizeComponent: GraphNodeFontSizeProps = {
	fontSize: undefined,
};

export const initFontWeightComponent: GraphNodeFontWeightProps = {
	fontWeight: TextFontWeightEnum.Regular,
};

export const initFontColorComponent: GraphNodeFontColorProps = {
	fontColor: undefined,
};

export const graphNodeAuxiliaryFont: GraphNodeFontProps = {
	fontProps: {
		fontSize: initFontSizeComponent.fontSize,
		fontWeight: initFontWeightComponent.fontWeight,
		fontColor: initFontColorComponent.fontColor,
	},
};
