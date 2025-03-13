import {
	TextAlignmentEnum,
	TextJustificationEnum,
} from '../../constants/enum-alignment';

export interface GraphNodeAlignmentProps {
	textAlignType: TextAlignmentEnum;
}

export interface GraphNodeJustificationProps {
	textJustificationType: TextJustificationEnum;
}

export interface GraphNodeAlignmentTextProps {
	textAlignmentProps: Partial<
		GraphNodeAlignmentProps & GraphNodeJustificationProps
	>;
}
