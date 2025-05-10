import { Node } from 'reactflow';
import { TopicNode as GqlTopicNode } from '@/shared/graphql/generated/output';

export function deserializeNode(
	dbNode: Omit<GqlTopicNode, 'UserTopicProgress'>,
	enhance?: (node: Node) => Node
): Node {
	const data = dbNode.meta ? JSON.parse(dbNode.meta) : {};

	const node: Node = {
		id: dbNode.id,
		type: dbNode.type,
		position: {
			x: dbNode.posxy?.x ?? 0,
			y: dbNode.posxy?.y ?? 0,
		},
		width: dbNode.posxy?.width,
		height: dbNode.posxy?.height,
		data: {
			...data,
			todos: dbNode.checklist ?? [],
		},
		style: {
			width: dbNode.posxy?.styleWidth,
			height: dbNode.posxy?.styleHeight,
		},
		zIndex: dbNode.zIndex ?? undefined,
	};

	return enhance ? enhance(node) : node;
}
