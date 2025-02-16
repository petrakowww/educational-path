import { NodeLabelEnum } from '@/shared/lib/node/component';
import { SubTopicNodeMemo, TitleNodeMemo } from '@/shared/node';

export const nodeTypes = {
	[NodeLabelEnum.subtopic]: SubTopicNodeMemo,
	[NodeLabelEnum.topic]: SubTopicNodeMemo,
	[NodeLabelEnum.title]: TitleNodeMemo,
};
