import { TopicNodeLite } from "@/features/view/mode/graph/types";
import { TopicEdge } from "@/shared/graphql/generated/output";

export interface TopicTreeNode extends TopicNodeLite {
	children: TopicTreeNode[];
}

export function buildLinearTree(nodes: TopicNodeLite[], edges: TopicEdge[]): TopicTreeNode[] {
	const childrenMap = new Map<string, TopicNodeLite[]>();
	const nodeMap = new Map<string, TopicNodeLite>();

	nodes.forEach((node) => nodeMap.set(node.id, node));

	edges.forEach(({ sourceId, targetId }) => {
		const child = nodeMap.get(targetId);
		if (!child) return;
		if (!childrenMap.has(sourceId)) {
			childrenMap.set(sourceId, []);
		}
		childrenMap.get(sourceId)!.push(child);
	});

	const rootNodes = nodes.filter((node) => {
		const isTarget = edges.some((e) => e.targetId === node.id);
		return !isTarget;
	});

	const buildTree = (node: TopicNodeLite): TopicTreeNode => ({
		...node,
		children: childrenMap.get(node.id)?.map(buildTree) ?? [],
	});

	return rootNodes.map(buildTree);
}
