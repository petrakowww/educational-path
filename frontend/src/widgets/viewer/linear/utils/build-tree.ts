import { Node, Edge } from 'reactflow';
import { TopicTreeNode } from '../types';
import { NodeType } from '@/features/node/editor/types/node';
import { NODE_TYPE_PRIORITY } from './priority';

export function buildLinearTree<T = unknown>(
	nodes: Node<T>[],
	edges: Edge[]
): TopicTreeNode<T>[] {
	const nodeMap = new Map<string, Node<T>>();
	const childrenMap = new Map<string, Node<T>[]>();

	nodes.forEach((node) => nodeMap.set(node.id, node));

	edges.forEach(({ source, target }) => {
		const child = nodeMap.get(target);
		if (!child) return;
		if (!childrenMap.has(source)) {
			childrenMap.set(source, []);
		}
		childrenMap.get(source)!.push(child);
	});

	const rootNodes = nodes.filter(
		(node) => !edges.some((e) => e.target === node.id)
	);

	const buildTree = (node: Node<T>): TopicTreeNode<T> => {
		const rawChildren = childrenMap.get(node.id) ?? [];
		const sortedChildren = rawChildren
			.slice()
			.sort((a, b) => (NODE_TYPE_PRIORITY[a.type as NodeType] ?? 999) - (NODE_TYPE_PRIORITY[b.type as NodeType] ?? 999));

		return {
			id: node.id,
			type: node.type ?? '',
			data: node.data,
			children: sortedChildren.map(buildTree),
		};
	};

	const sortedRoot = rootNodes
		.slice()
		.sort((a, b) => (NODE_TYPE_PRIORITY[a.type as NodeType] ?? 999) - (NODE_TYPE_PRIORITY[b.type as NodeType] ?? 999));

	return sortedRoot.map(buildTree);
}
