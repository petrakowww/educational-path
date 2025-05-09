import { createWithEqualityFn } from 'zustand/traditional';
import { merge, pick } from 'lodash';
import { applyNodeChanges, Node } from 'reactflow';
import { NodeData, NodeMain } from '@/features/node/editor/types/node';
import { shallow } from 'zustand/vanilla/shallow';
import { DeepPartial } from '@/shared/lib/types/deep-partial';
import { Links } from '@/features/node/editor/types/extended-node';
import {
	ChecklistItem,
	CompletionType,
	NodeKind,
} from '@/shared/graphql/generated/output';

interface NodeState {
	selectedNode: Node | null;
	selectedNodeId: string | null;
	nodesById: Record<string, Node>;
	nodesList: Node[];

	setNode: (node: Node | null) => void;
	setNodes: (nodes: Node[]) => void;
	updateNodeProperties: <T = NodeMain>(params: {
		nodeId: string;
		properties: Partial<Node<DeepPartial<T>>>;
	}) => void;
	deleteNode: (nodeId: string) => void;

	moveNodeToTop: (nodeId: string) => void;
	moveNodeToBottom: (nodeId: string) => void;
	moveNodeUp: (nodeId: string) => void;
	moveNodeDown: (nodeId: string) => void;

	replaceLinks: (nodeId: string, newLinks: Links) => void;
}

export const useNodeStore = createWithEqualityFn<NodeState>(
	(set, get) => ({
		selectedNode: null,
		selectedNodeId: null,
		nodesById: {},
		nodesList: [],

		setNode: (node) => {
			set({
				selectedNodeId: node?.id ?? null,
				selectedNode: node ?? null,
			});
		},

		setNodes: (nodes) => {
			const sorted = [...nodes].sort(
				(a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0)
			);
			const newNodesById: Record<string, NodeData> = {};
			const newNodesList: NodeData[] = [];

			for (const node of sorted) {
				if (!node?.id || newNodesById[node.id]) continue;
				newNodesById[node.id] = node;
				newNodesList.push(node);
			}

			const selectedNodeId = get().selectedNodeId;
			set({
				nodesById: newNodesById,
				nodesList: newNodesList,
				selectedNode: selectedNodeId
					? (newNodesById[selectedNodeId] ?? null)
					: null,
			});
		},

		updateNodeProperties: ({
			nodeId,
			properties,
		}: {
			nodeId: string;
			properties: {
				data?: Partial<{
					title: string;
					canShowLabel: boolean;
					kind: NodeKind;
					completionType: CompletionType;
					todos: ChecklistItem[];
					meta: Partial<NodeMain['meta']>;
				}>;
				style?: React.CSSProperties;
			};
		}) => {
			const { nodesById, nodesList, selectedNodeId } = get();
			const existing = nodesById[nodeId];
			if (!existing) return;

			console.log(properties.data?.todos);
			const updated: NodeData = {
				...existing,
				style: merge({}, existing.style, properties.style),
				data: {
					...existing.data,
					...pick(properties.data, [
						'title',
						'kind',
						'completionType',
						'todos',
						'topicProps',
						'linkProps',
						'buttonProps',
					]),
					meta: {
						...existing.data.meta,
						...properties.data?.meta,
						blockProps: {
							...existing.data.meta?.blockProps,
							...properties.data?.meta?.blockProps,
						},
						fontProps: {
							...existing.data.meta?.fontProps,
							...properties.data?.meta?.fontProps,
						},
					},
				},
			};

			set({
				nodesById: {
					...nodesById,
					[nodeId]: updated,
				},
				nodesList: nodesList.map((node) =>
					node.id === nodeId ? updated : node
				),
				selectedNode:
					selectedNodeId === nodeId ? updated : get().selectedNode,
			});
		},

		deleteNode: (nodeId) => {
			const { nodesList } = get();
			const changes = [{ id: nodeId, type: 'remove' } as const];
			const updatedNodes = applyNodeChanges(changes, nodesList);

			set({
				nodesList: updatedNodes,
				nodesById: Object.fromEntries(
					updatedNodes.map((n) => [n.id, n])
				),
				selectedNodeId:
					get().selectedNodeId === nodeId
						? null
						: get().selectedNodeId,
				selectedNode:
					get().selectedNodeId === nodeId ? null : get().selectedNode,
			});
		},

		moveNodeToTop: (id: string) =>
			set((state) => {
				const maxZ = Math.max(
					...state.nodesList.map((n) => n.zIndex ?? 0),
					0
				);
				const updated = state.nodesList.map((n) =>
					n.id === id ? { ...n, zIndex: maxZ + 1 } : n
				);
				return {
					nodesList: updated.sort(
						(a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0)
					),
					nodesById: Object.fromEntries(
						updated.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeToBottom: (id: string) =>
			set((state) => {
				const minZ = Math.min(
					...state.nodesList.map((n) => n.zIndex ?? 0),
					0
				);
				const updated = state.nodesList.map((n) =>
					n.id === id ? { ...n, zIndex: minZ - 1 } : n
				);
				return {
					nodesList: updated.sort(
						(a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0)
					),
					nodesById: Object.fromEntries(
						updated.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeUp: (id: string) =>
			set((state) => {
				let list = normalizeZIndexes(state.nodesList);
				const index = list.findIndex((n) => n.id === id);
				if (index === -1 || index === list.length - 1) return state;

				// swap zIndex
				[list[index].zIndex, list[index + 1].zIndex] = [
					list[index + 1].zIndex,
					list[index].zIndex,
				];

				const normalized = normalizeZIndexes(list);
				return {
					nodesList: normalized,
					nodesById: Object.fromEntries(
						normalized.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeDown: (id: string) =>
			set((state) => {
				let list = normalizeZIndexes(state.nodesList);
				const index = list.findIndex((n) => n.id === id);
				if (index <= 0) return state;

				// swap zIndex
				[list[index].zIndex, list[index - 1].zIndex] = [
					list[index - 1].zIndex,
					list[index].zIndex,
				];

				const normalized = normalizeZIndexes(list);
				return {
					nodesList: normalized,
					nodesById: Object.fromEntries(
						normalized.map((n) => [n.id, n])
					),
				};
			}),

		/**
		 *
		 * Далее идут отдельные реализации
		 */

		replaceLinks: (nodeId: string, newLinks: Links) => {
			const { nodesById, nodesList, selectedNodeId } = get();
			const existing = nodesById[nodeId];
			if (!existing) return;

			const updated: NodeData = {
				...existing,
				data: {
					...existing.data,
					linkProps: {
						...existing.data?.linkProps,
						links: newLinks,
					},
				},
			};

			set({
				nodesById: {
					...nodesById,
					[nodeId]: updated,
				},
				nodesList: nodesList.map((node) =>
					node.id === nodeId ? updated : node
				),
				selectedNode:
					selectedNodeId === nodeId ? updated : get().selectedNode,
			});
		},
	}),
	shallow
);

const normalizeZIndexes = (nodes: Node[]): Node[] => {
	const sorted = [...nodes].sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0));
	return sorted.map((node, index) => ({ ...node, zIndex: index }));
};
