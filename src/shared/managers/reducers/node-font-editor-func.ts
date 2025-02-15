import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';

export const updateNodeFontSizeFunction = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; fontSize: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.fontProps.fontSize = action.payload.fontSize;
	}
};

export const updateNodeFontColorFunction = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; textColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.fontProps.textColor = action.payload.textColor;
	}
};

export const updateNodeFontWeightFunction = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; fontWeight: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.fontProps.fontWeight = action.payload.fontWeight;
	}
};
