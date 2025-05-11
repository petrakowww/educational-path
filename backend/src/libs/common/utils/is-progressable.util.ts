import { NodeType } from '@prisma/__generated__';

export const SUPPORTED_PROGRESS_NODE_TYPES: readonly NodeType[] = [
	NodeType.TODO,
	NodeType.TOPIC,
	NodeType.SUBTOPIC,
	NodeType.CHECKLIST,
] as const;

export type ProgressableNodeType = typeof SUPPORTED_PROGRESS_NODE_TYPES[number];

export function isProgressableType(type: NodeType): type is ProgressableNodeType {
	return SUPPORTED_PROGRESS_NODE_TYPES.includes(type);
}
