import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '../classes/main/node-topic';
import { NodeLabelEnum } from '../constants/node-label';

export const nodeRegistry = {
	[NodeLabelEnum.topic]: TopicNodeComponent,
	[NodeLabelEnum.subtopic]: SubTopicNodeComponent,
};

export function createGraphNode<T extends keyof typeof nodeRegistry>(
	type: T,
	position?: { x: number; y: number }
) {
	const NodeClass = nodeRegistry[type];

	const data = { ...new NodeClass() };

	return {
		id: crypto.randomUUID(),
		type: type,
		position: position ?? { x: 0, y: 0 },
		data,
	};
}

const validNodeTypes = {
	[NodeLabelEnum.topic]: true,
	[NodeLabelEnum.subtopic]: true,
} as const;

export const isValidNodeType = (
	type: NodeLabelEnum
): type is keyof typeof validNodeTypes => {
	return type in validNodeTypes;
};

export type GlobalGraphNodeTypesComponents =
	| TopicNodeComponent
	| SubTopicNodeComponent;
