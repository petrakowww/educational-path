import { createWithEqualityFn } from 'zustand/traditional';
import { merge } from 'lodash';
import { applyNodeChanges, Node } from 'reactflow';
import { NodeData, NodeMain } from '@/features/node/editor/types/node';
import { shallow } from 'zustand/vanilla/shallow';
import { DeepPartial } from '@/shared/lib/types/deep-partial';
import { Links } from '@/features/node/editor/types/extended-node';

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
        nodesById: Object.fromEntries(updatedNodes.map((n) => [n.id, n])),
        selectedNodeId: get().selectedNodeId === nodeId ? null : get().selectedNodeId,
        selectedNode: get().selectedNodeId === nodeId ? null : get().selectedNode,
      });
    },

		moveNodeToTop: (id: string) =>
			set((state) => {
				const node = state.nodesList.find((n) => n.id === id);
				if (!node) return state;
				const filtered = state.nodesList.filter((n) => n.id !== id);
				const newList = [...filtered, node];
				return {
					nodesList: newList,
					nodesById: Object.fromEntries(
						newList.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeToBottom: (id: string) =>
			set((state) => {
				const node = state.nodesList.find((n) => n.id === id);
				if (!node) return state;
				const filtered = state.nodesList.filter((n) => n.id !== id);
				const newList = [node, ...filtered];
				return {
					nodesList: newList,
					nodesById: Object.fromEntries(
						newList.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeUp: (id: string) =>
			set((state) => {
				const index = state.nodesList.findIndex((n) => n.id === id);
				if (index === -1 || index === state.nodesList.length - 1)
					return state;
				const newList = [...state.nodesList];
				[newList[index], newList[index + 1]] = [
					newList[index + 1],
					newList[index],
				];
				return {
					nodesList: newList,
					nodesById: Object.fromEntries(
						newList.map((n) => [n.id, n])
					),
				};
			}),

		moveNodeDown: (id: string) =>
			set((state) => {
				const index = state.nodesList.findIndex((n) => n.id === id);
				if (index <= 0) return state;
				const newList = [...state.nodesList];
				[newList[index], newList[index - 1]] = [
					newList[index - 1],
					newList[index],
				];
				return {
					nodesList: newList,
					nodesById: Object.fromEntries(
						newList.map((n) => [n.id, n])
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
