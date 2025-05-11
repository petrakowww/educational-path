import { NodeMain } from "@/features/node/editor/types/node";
import { TopicNodeLite } from "@/features/view/mode/graph/types";
import { TopicEdge } from "@/shared/graphql/generated/output";

export type TopicTree = Omit<TopicNodeLite, 'UserTopicProgress' | 'meta'>;

export interface TopicTreeNode<T = NodeMain> extends TopicNodeLite {
	children: TopicTreeNode[];
    meta: T;
}

export function buildLinearTree(nodes: TopicTreeNode[], edges: TopicEdge[]): TopicTreeNode[] {
	const childrenMap = new Map<string, TopicTreeNode[]>();
	const nodeMap = new Map<string, TopicTreeNode>();

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

	const buildTree = (node: TopicTreeNode): TopicTreeNode => ({
		...node,
		children: childrenMap.get(node.id)?.map(buildTree) ?? [],
	});

	return rootNodes.map(buildTree);
}
