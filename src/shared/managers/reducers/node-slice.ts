import { applyNodeChanges } from 'reactflow';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialNodeState } from '../initial/node-initial';
import * as nodeBlockEditorFuncs from './node-block-editor-func';
import * as nodeFontEditorFuncs from './node-font-editor-func';
import { updateNodeLabelFunction } from './node-label-editor-func';
import * as nodeAlignmentEditorFuncs from './node-alignment-editor-func';

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
			state.nodes = state.nodes.filter((node) => node.id !== action.payload);
		
			if (state.selectedNodeId === action.payload) {
				state.selectedNodeId = null;
			}
		},
		onNodesChange: (state, action) => {
			const nodes = applyNodeChanges(action.payload, state.nodes);
			state.nodes = nodes;
		},
		updateNodeLabel: (state, action) => {
			updateNodeLabelFunction(state, action);
		},
		updateNodeFontColor: (state, action) => {
			nodeFontEditorFuncs.updateNodeFontColorFunction(state, action);
		},
		updateNodeFontSize: (state, action) => {
			nodeFontEditorFuncs.updateNodeFontSizeFunction(state, action);
		},
		updateNodeFontWeight: (state, action) => {
			nodeFontEditorFuncs.updateNodeFontWeightFunction(state, action);
		},
		updateNodeBackground: (state, action) => {
			nodeBlockEditorFuncs.updateNodeBackgroundFunction(state, action);
		},
		updateNodeBorderWidth: (state, action) => {
			nodeBlockEditorFuncs.updateNodeBorderWidthFunction(state, action);
		},
		updateNodeBorderRadius: (state, action) => {
			nodeBlockEditorFuncs.updateNodeBorderRadiusFunction(state, action);
		},
		updateNodeBorderColor: (state, action) => {
			nodeBlockEditorFuncs.updateNodeBorderColor(state, action);
		},
		updateNodeTextAlignment: (state, action) => {
			nodeAlignmentEditorFuncs.updateNodeTextAlignmentFunction(
				state,
				action
			);
		},
		updateNodeTextVerticalAlignment: (state, action) => {
			nodeAlignmentEditorFuncs.updateNodeTextVerticalAlignmentFunction(
				state,
				action
			);
		},
	},
});

const {
	setSelectedNode,
	setNodes,
	updateNode,
	deleteNode,
	onNodesChange,
	updateNodeLabel,
	updateNodeFontColor,
	updateNodeFontSize,
	updateNodeFontWeight,
	updateNodeBackground,
	updateNodeBorderWidth,
	updateNodeBorderRadius,
	updateNodeBorderColor,
	updateNodeTextAlignment,
	updateNodeTextVerticalAlignment,
} = nodeSlice.actions;

export {
	setSelectedNode,
	setNodes,
	updateNode,
	deleteNode,
	onNodesChange,
	updateNodeLabel,
	updateNodeFontColor,
	updateNodeFontSize,
	updateNodeFontWeight,
	updateNodeBackground,
	updateNodeBorderRadius,
	updateNodeBorderWidth,
	updateNodeBorderColor,
	updateNodeTextAlignment,
	updateNodeTextVerticalAlignment,
};

export const nodeReducer = nodeSlice.reducer;
