import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import {
	SaveTopicMapInput,
	UpdateTopicNodeInput,
	UpdateTopicEdgeInput,
} from '@/shared/graphql/generated/output';
import { Edge, Node } from 'reactflow';

export function transformNodesAndEdgesForMutation(
	routeId: string,
	nodesList: Node<NodeDataShapeToDo>[],
	edgesList: Edge[]
): SaveTopicMapInput {
	const nodes: UpdateTopicNodeInput[] = nodesList.flatMap((node) => {
		if (!node.type) return [];

		const {
			id,
			position,
			width,
			height,
			style,
			zIndex,
			data: { title, todos },
		} = node;

		const posxy = {
			x: position.x,
			y: position.y,
			width,
			height,
			styleWidth: style?.width,
			styleHeight: style?.height,
		};

		const checklist =
			todos && todos.length > 0
				? todos.map(({ id, text }) => ({ id, text }))
				: null;

		return [
			{
				id,
				title,
				type: node.type,
				meta: JSON.stringify(node.data),
				posxy,
				zIndex: zIndex ?? 0,
				checklist,
			},
		];
	});

	const edges: UpdateTopicEdgeInput[] = edgesList.map((edge) => {
		const meta =
			Object.keys(edge).length > 0 ? JSON.stringify(edge) : undefined;

		return {
			id: edge.id,
			sourceId: edge.source,
			targetId: edge.target,
			meta,
		};
	});

	return {
		routeId,
		nodes,
		edges,
	};
}
