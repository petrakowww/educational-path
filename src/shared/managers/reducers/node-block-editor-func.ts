import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import {
	GraphNodeBlockProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';
import { updateNodeDataHelper } from '../utils/update-node-data-helper';

export const updateNodeBackgroundFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; backgroundColor: string }>
) => {
	updateNodeDataHelper<GraphNodeBlockProps>(
		state,
		action.payload.id,
		(data) =>
			(data.blockProps.backgroundColor = action.payload.backgroundColor)
	);
};

export const updateNodeBorderRadiusFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; borderRadius: number }>
) => {
	updateNodeDataHelper<GraphNodeBlockProps>(
		state,
		action.payload.id,
		(data) => (data.blockProps.borderRadius = action.payload.borderRadius)
	);
};

export const updateNodeBorderWidthFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; borderWidth: number | undefined }>
) => {
	updateNodeDataHelper<GraphNodeBlockProps>(
		state,
		action.payload.id,
		(data) => (data.blockProps.borderWidth = action.payload.borderWidth)
	);
};

export const updateNodeBorderColor = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; borderColor: string }>
) => {
	updateNodeDataHelper<GraphNodeBlockProps>(
		state,
		action.payload.id,
		(data) => (data.blockProps.borderColor = action.payload.borderColor)
	);
};

export const updateNodePadding = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; padding?: number }>
) => {
	updateNodeDataHelper<GraphNodeBlockProps>(
		state,
		action.payload.id,
		(data) => (data.blockProps.padding = action.payload.padding)
	);
};
