import { NodeType } from '@/features/node/editor/types/node';

const openableTypes = new Set<NodeType>([
	'TOPIC',
	'SUBTOPIC',
	'TODO',
    'BUTTON',
] as NodeType[]);

export const isManualNode = (type: unknown): type is NodeType => {
	return openableTypes.has(type as NodeType);
};
