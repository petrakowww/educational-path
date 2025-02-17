import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import { GraphNodeComponent, GraphNodeLabelProps } from '@/shared/lib/node/component';

export const updateNodeLabelFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeLabelProps>>,
	action: PayloadAction<{ id: string; label: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.label = action.payload.label;
	}
};
