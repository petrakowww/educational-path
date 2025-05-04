import { createWithEqualityFn } from 'zustand/traditional';
import { merge } from 'lodash';
import { Node } from 'reactflow';
import { NodeData } from '@/features/node/editor/types/node';
import { shallow } from 'zustand/vanilla/shallow';

interface NodeState {
	selectedNode: Node | null;
	selectedNodeId: string | null;
	nodesById: Record<string, Node>;
	nodesList: Node[];

	setNode: (node: Node | null) => void;
	setNodes: (nodes: Node[]) => void;
	updateNodeProperties: (params: {
		nodeId: string;
		properties: Partial<NodeData>;
	}) => void;
	deleteNode: (nodeId: string) => void;
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
			const newNodesById: Record<string, NodeData> = {};
			const newNodesList: NodeData[] = [];

			for (const node of nodes) {
				if (!node?.id) continue;
				if (newNodesById[node.id]) {
					continue;
				}
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

		updateNodeProperties: ({ nodeId, properties }) => {
			const { nodesById, nodesList, selectedNodeId } = get();
			const existing = nodesById[nodeId];
			if (!existing) return;

			const updated: NodeData = {
				...existing,
				...properties,
				style: merge({}, existing.style, properties.style),
				data: merge({}, existing.data, properties.data),
			};
			console.log(properties.type);
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
			const { nodesById, nodesList, selectedNodeId } = get();
			const newNodesById = { ...nodesById };
			delete newNodesById[nodeId];

			const newNodesList = nodesList.filter((node) => node.id !== nodeId);

			set({
				nodesById: newNodesById,
				nodesList: newNodesList,
				selectedNodeId:
					selectedNodeId === nodeId ? null : selectedNodeId,
				selectedNode:
					selectedNodeId === nodeId ? null : get().selectedNode,
			});
		},
	}),
	shallow
);
