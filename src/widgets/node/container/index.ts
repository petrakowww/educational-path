import { NodeLabelEnum } from '@/shared/lib/node/component';
import {
	ButtonNodeMemo,
	LabelNodeMemo,
	LegendNodeMemo,
	ParagraphNodeMemo,
	SubTopicNodeMemo,
	TitleNodeMemo,
} from '@/shared/node';

export const nodeTypes = {
	[NodeLabelEnum.subtopic]: SubTopicNodeMemo,
	[NodeLabelEnum.topic]: SubTopicNodeMemo,
	[NodeLabelEnum.title]: TitleNodeMemo,
	[NodeLabelEnum.paragraph]: ParagraphNodeMemo,
	[NodeLabelEnum.label]: LabelNodeMemo,
	[NodeLabelEnum.button]: ButtonNodeMemo,
	[NodeLabelEnum.legend]: LegendNodeMemo,
};
