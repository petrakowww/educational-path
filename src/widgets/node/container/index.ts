import { NodeLabelEnum } from '@/shared/lib/node/component';
import { SubTopicNodeMemo } from '@/shared/node/components';

export const nodeTypes = {
	[NodeLabelEnum.subtopic]: SubTopicNodeMemo,
	[NodeLabelEnum.topic]: SubTopicNodeMemo,
};
