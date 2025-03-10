import { applyNodeChanges } from 'reactflow';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateNodePropertyFunction } from '../utils/update-node-data-helper';

import { GraphNodeComponent } from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export interface NodeInterface<T extends GraphNodeComponent<unknown>> {
	selectedNodeId: string | null;
	nodes: Node<T>[];
}


export const initialNodeState: NodeInterface<GraphNodeComponent<unknown>> = {
	selectedNodeId: null,
	nodes: [],
};


export const nodeSlice = createSlice({
	name: 'NodeEditorBehaviour',
	initialState: initialNodeState,
	reducers: {
		setSelectedNode: (state, action: PayloadAction<string | null>) => {
			state.selectedNodeId = action.payload;
		},
		setNodes: (state, action) => {
			state.nodes = action.payload;
		},
		updateNode: (state, action) => {
			const index = state.nodes.findIndex(
				(n) => n.id === action.payload.id
			);
			if (index !== -1) {
				state.nodes[index] = action.payload;
			}
		},
		deleteNode: (state, action: PayloadAction<string>) => {
			state.nodes = state.nodes.filter(
				(node) => node.id !== action.payload
			);

			if (state.selectedNodeId === action.payload) {
				state.selectedNodeId = null;
			}
		},
		onNodesChange: (state, action) => {
			const nodes = applyNodeChanges(action.payload, state.nodes);
			state.nodes = nodes;
		},
		updateNodeProperty: updateNodePropertyFunction,
	},
});

const {
	setSelectedNode,
	setNodes,
	updateNode,
	deleteNode,
	onNodesChange,
	updateNodeProperty,
} = nodeSlice.actions;

export {
	setSelectedNode,
	setNodes,
	updateNode,
	deleteNode,
	onNodesChange,
	updateNodeProperty,
};

export const nodeReducer = nodeSlice.reducer;
