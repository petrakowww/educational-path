import { TopicEdge } from '@/shared/graphql/generated/output';
import { TopicNodeLite } from './types';
import { NodeType } from '@/features/node/editor/types/node';

const NON_BLOCKING_TYPES = new Set<NodeType>([
	NodeType.title,
	NodeType.paragraph,
	NodeType.label,
	NodeType.button,
]);

export function buildGraph(
	edges: TopicEdge[],
	nodes: TopicNodeLite[]
): {
	successors: Record<string, string[]>;
	predecessors: Record<string, string[]>;
} {
	const successors: Record<string, string[]> = {};
	const predecessors: Record<string, string[]> = {};

	const nonBlockingNodes = new Set(
		nodes.filter((n) => NON_BLOCKING_TYPES.has(n.type as NodeType)).map((n) => n.id)
	);

	const incomingMap = new Map<string, string[]>();
	const outgoingMap = new Map<string, string[]>();

	for (const edge of edges) {
		if (!incomingMap.has(edge.targetId)) incomingMap.set(edge.targetId, []);
		if (!outgoingMap.has(edge.sourceId)) outgoingMap.set(edge.sourceId, []);

		incomingMap.get(edge.targetId)!.push(edge.sourceId);
		outgoingMap.get(edge.sourceId)!.push(edge.targetId);
	}

	for (const node of nodes) {
		const nodeId = node.id;

		if (nonBlockingNodes.has(nodeId)) {
			const sources = incomingMap.get(nodeId) ?? [];
			const targets = outgoingMap.get(nodeId) ?? [];

			for (const src of sources) {
				for (const tgt of targets) {
					if (!nonBlockingNodes.has(src) && !nonBlockingNodes.has(tgt)) {
						if (!successors[src]) successors[src] = [];
						if (!predecessors[tgt]) predecessors[tgt] = [];

						successors[src].push(tgt);
						predecessors[tgt].push(src);
					}
				}
			}

			continue;
		}

		const sources = incomingMap.get(nodeId) ?? [];
		for (const src of sources) {
			if (nonBlockingNodes.has(src)) continue;
			if (!predecessors[nodeId]) predecessors[nodeId] = [];
			predecessors[nodeId].push(src);
		}

		const targets = outgoingMap.get(nodeId) ?? [];
		for (const tgt of targets) {
			if (nonBlockingNodes.has(tgt)) continue;
			if (!successors[nodeId]) successors[nodeId] = [];
			successors[nodeId].push(tgt);
		}
	}

	return { successors, predecessors };
}
