import {
	TextAlignmentEnum,
	TextJustificationEnum,
} from '../../constants/enum-alignment';
import {
	GraphNodeAlignmentProps,
	GraphNodeAlignmentTextProps,
	GraphNodeJustificationProps,
} from '../../interfaces/auxiliary/type-alignment';

export const initTextAlignComponent: GraphNodeAlignmentProps = {
	textAlignType: TextAlignmentEnum.Center,
};

export const initTextJustificationComponent: GraphNodeJustificationProps = {
	textJustificationType: TextJustificationEnum.Middle,
};

export const graphNodeAuxiliaryAlignment: GraphNodeAlignmentTextProps = {
	textAlignmentProps: {
		textAlignType: initTextAlignComponent.textAlignType,
		textJustificationType:
			initTextJustificationComponent.textJustificationType,
	},
};
