import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import { GraphNodeBlockProps, GraphNodeComponent } from '@/shared/lib/node/component';

export const updateNodeBackgroundFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeBlockProps>>,
	action: PayloadAction<{ id: string; backgroundColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);
	if (node) {
		node.data.dataTProps.blockProps.backgroundColor = action.payload.backgroundColor;
	}
};

export const updateNodeBorderRadiusFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeBlockProps>>,
	action: PayloadAction<{ id: string; borderRadius: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.blockProps.borderRadius = action.payload.borderRadius;
	}
};

export const updateNodeBorderWidthFunction = (
	state: NodeInterface<GraphNodeComponent<GraphNodeBlockProps>>,
	action: PayloadAction<{ id: string; borderWidth: number }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.blockProps.borderWidth = action.payload.borderWidth;
	}
};

export const updateNodeBorderColor = (
	state: NodeInterface<GraphNodeComponent<GraphNodeBlockProps>>,
	action: PayloadAction<{ id: string; borderColor: string }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);

	if (node) {
		node.data.dataTProps.blockProps.borderColor = action.payload.borderColor;
	}
};

