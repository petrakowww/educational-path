import { NodeBorderRadiusEnum } from '../../constants/enum-border-radius';
import {
	GraphNodeBlockProps,
	GraphNodePadding,
} from '../../interfaces/auxiliary/type-block';
import {
	GraphNodeBackgroundColorProps,
	GraphNodeBorderRadius,
	GraphNodeBorderWidth,
	GraphNodeBorderColorProps,
} from '../../interfaces/auxiliary/type-block';

export const initBackgroundColorComponent: GraphNodeBackgroundColorProps = {
	backgroundColor: undefined,
};

export const initBorderColorComponent: GraphNodeBorderColorProps = {
	borderColor: undefined,
};

export const initBorderRadiusComponent: GraphNodeBorderRadius = {
	borderRadius: NodeBorderRadiusEnum.MD,
};

export const initBorderWidthComponent: GraphNodeBorderWidth = {
	borderWidth: undefined,
};

export const initPaddingComponent: GraphNodePadding = {
	padding: undefined,
};

export const graphNodeAuxiliaryBlock: GraphNodeBlockProps = {
	blockProps: {
		backgroundColor: initBackgroundColorComponent.backgroundColor,
		borderColor: initBorderColorComponent.borderColor,
		borderRadius: initBorderRadiusComponent.borderRadius,
		borderWidth: initBorderWidthComponent.borderWidth,
		padding: initPaddingComponent.padding,
	},
};
