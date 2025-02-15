import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';

export const updateNodeBackground = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; backgroundColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);
	if (node) {
		node.data.blockProps.backgroundColor = action.payload.backgroundColor;
	}
};

export const updateNodeBorderRadius = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; borderRadius: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.blockProps.borderRadius = action.payload.borderRadius;
	}
};

export const updateNodeBorderWidth = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; borderWidth: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.blockProps.borderWidth = action.payload.borderWidth;
	}
};

export const updateNodeBorderColor = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; borderColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.blockProps.borderColor = action.payload.borderColor;
	}
};

