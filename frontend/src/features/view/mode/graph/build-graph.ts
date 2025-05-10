import { TopicEdge } from '@/shared/graphql/generated/output';

type AdjacencyMap = Record<string, string[]>;

export function buildGraph(edges: TopicEdge[]): {
	successors: AdjacencyMap;
	predecessors: AdjacencyMap;
} {
	const successors: AdjacencyMap = {};
	const predecessors: AdjacencyMap = {};

	for (const edge of edges) {
		const from = edge.sourceId;
		const to = edge.targetId;

		if (!successors[from]) successors[from] = [];
		if (!predecessors[to]) predecessors[to] = [];

		successors[from].push(to);
		predecessors[to].push(from);
	}

	return { successors, predecessors };
}
