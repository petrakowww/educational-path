import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import {
	GraphNodeComponent,
	GraphNodeFontProps,
} from '@/shared/lib/node/component';
import { updateNodeDataHelper } from '../utils/update-node-data-helper';

export const updateNodeFontSizeFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; fontSize: number }>
) => {
	updateNodeDataHelper<GraphNodeFontProps>(
		state,
		action.payload.id,
		(data) => (data.fontProps.fontSize = action.payload.fontSize)
	);
};

export const updateNodeFontColorFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; textColor: string }>
) => {
	updateNodeDataHelper<GraphNodeFontProps>(
		state,
		action.payload.id,
		(data) => (data.fontProps.fontColor = action.payload.textColor)
	);
};

export const updateNodeFontWeightFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; fontWeight: number }>
) => {
	updateNodeDataHelper<GraphNodeFontProps>(
		state,
		action.payload.id,
		(data) => (data.fontProps.fontWeight = action.payload.fontWeight)
	);
};
