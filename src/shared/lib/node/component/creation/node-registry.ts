import { ParagraphNodeComponent } from '../classes/collectors/paragraph-node-component';
import { TitleNodeComponent } from '../classes/collectors/title-node-component';
import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '../classes/collectors/topic-node-component';
import { NodeLabelEnum } from '../constants/enum-label';

export const nodeRegistry = {
	[NodeLabelEnum.topic]: TopicNodeComponent,
	[NodeLabelEnum.subtopic]: SubTopicNodeComponent,
	[NodeLabelEnum.title]: TitleNodeComponent,
	[NodeLabelEnum.paragraph]: ParagraphNodeComponent,
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

export const isValidNodeType = (
	type: NodeLabelEnum
): type is keyof typeof nodeRegistry => {
	return type in nodeRegistry;
};
