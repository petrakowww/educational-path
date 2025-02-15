import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';

export const updateNodeLabel = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; label: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.label = action.payload.label;
	}
};
