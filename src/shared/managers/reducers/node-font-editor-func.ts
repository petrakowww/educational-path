import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import { GraphNodeComponent, GraphNodeFontProps } from '@/shared/lib/node/component';

export const updateNodeFontSizeFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeFontProps>>,
	action: PayloadAction<{ id: string; fontSize: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.fontProps.fontSize = action.payload.fontSize;
	}
};

export const updateNodeFontColorFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeFontProps>>,
	action: PayloadAction<{ id: string; textColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.fontProps.fontColor = action.payload.textColor;
	}
};

export const updateNodeFontWeightFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeFontProps>>,
	action: PayloadAction<{ id: string; fontWeight: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.fontProps.fontWeight = action.payload.fontWeight;
	}
};
