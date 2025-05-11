import {
	TopicEdge,
	CourseModeType,
	NodeStatus,
} from '@/shared/graphql/generated/output';
import { isManualNode } from '@/shared/node/utils/is-openable-node';
import { buildGraph } from './build-graph';
import { ProgressLite, TopicNodeLite } from './types';
import { NodeType } from '@/features/node/editor/types/node';

type ProgressMap = Record<string, boolean>;

const NON_BLOCKING_TYPES = new Set<NodeType>([
	NodeType.title,
	NodeType.paragraph,
	NodeType.label,
	NodeType.button,
]);

export function calculateVisibleNodes(
	nodes: TopicNodeLite[],
	progress: ProgressLite[],
	edges: TopicEdge[],
	mode: CourseModeType
): Set<string> {
	const { predecessors } = buildGraph(edges, nodes);

	const completedMap: ProgressMap = {};
	for (const item of progress) {
		if (item.status === NodeStatus.Completed) {
			completedMap[item.topicNodeId] = true;
		}
	}

	const visible = new Set<string>();

	if (mode === CourseModeType.Flexible) {
		for (const node of nodes) {
			visible.add(node.id);
		}
		return visible;
	}

	let changed = true;

	while (changed) {
		changed = false;

		for (const node of nodes) {
			if (visible.has(node.id)) continue;

			const isManual = isManualNode(node.type);
			if (!isManual) {
				visible.add(node.id);
				changed = true;
				continue;
			}

			const preds = (predecessors[node.id] ?? []).filter((pId) => {
				const predNode = nodes.find((n) => n.id === pId);
				return predNode && !NON_BLOCKING_TYPES.has(predNode.type as NodeType);
			});

			const allPredsVisibleAndCompleted = preds.every(
				(p) => visible.has(p) && completedMap[p]
			);

			if (allPredsVisibleAndCompleted || preds.length === 0) {
				visible.add(node.id);
				changed = true;
			}
		}
	}

	return visible;
}
