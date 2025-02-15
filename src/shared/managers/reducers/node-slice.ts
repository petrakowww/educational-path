import { applyNodeChanges, Node } from 'reactflow';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalGraphNodeTypesComponents } from '@/shared/lib/node/component';
import { initialNodeState } from '../initial/node-initial';
import {
	updateNodeBackground,
	updateNodeBorderRadius,
	updateNodeBorderWidth,
	updateNodeBorderColor,
} from './node-block-editor-func';
import {
	updateNodeFontColor,
	updateNodeFontSize,
	updateNodeFontWeight,
} from './node-font-editor-func';
import { updateNodeLabel } from './node-label-editor-func';

export const nodeSlice = createSlice({
	name: 'NodeEditorBehaviour',
	initialState: initialNodeState,
	reducers: {
		setSelectedNode: (state, action: PayloadAction<string | null>) => {
			state.selectedNodeId = action.payload;
		},
		setNodes: (
			state,
			action: PayloadAction<Node<GlobalGraphNodeTypesComponents>[]>
		) => {
			state.nodes = action.payload;
		},
		updateNode: (
			state,
			action: PayloadAction<Node<GlobalGraphNodeTypesComponents>>
		) => {
			const index = state.nodes.findIndex(
				(n) => n.id === action.payload.id
			);
			if (index !== -1) {
				state.nodes[index] = action.payload;
			}
		},
		onNodesChange: (state, action) => {
			const nodes = applyNodeChanges(action.payload, state.nodes);
			state.nodes = nodes;
		},
		updateNodeLabel,
		updateNodeFontColor,
		updateNodeFontSize,
		updateNodeFontWeight,
		updateNodeBackground,
		updateNodeBorderRadius,
		updateNodeBorderWidth,
		updateNodeBorderColor,
	},
});

const {
	setSelectedNode,
	setNodes,
	updateNode,
	onNodesChange,
	updateNodeLabel: nodeUpdateNodeLabel,
	updateNodeFontColor: nodeUpdateNodeFontColor,
	updateNodeFontSize: nodeUpdateNodeFontSize,
	updateNodeFontWeight: nodeUpdateNodeFontWeight,
	updateNodeBackground: nodeUpdateNodeBackground,
	updateNodeBorderWidth: nodeUpdateNodeBorderWidth,
	updateNodeBorderRadius: nodeUpdateNodeBorderRadius,
	updateNodeBorderColor: nodeUpdateNodeBorderColor,
} = nodeSlice.actions;

export {
	setSelectedNode,
	setNodes,
	updateNode,
	onNodesChange,
	nodeUpdateNodeLabel as updateNodeLabel,
	nodeUpdateNodeFontColor as updateNodeFontColor,
	nodeUpdateNodeFontSize as updateNodeFontSize,
	nodeUpdateNodeFontWeight as updateNodeFontWeight,
	nodeUpdateNodeBackground as updateNodeBackground,
	nodeUpdateNodeBorderRadius as updateNodeBorderRadius,
	nodeUpdateNodeBorderWidth as updateNodeBorderWidth,
	nodeUpdateNodeBorderColor as updateNodeBorderColor,
};

export const nodeReducer = nodeSlice.reducer;
