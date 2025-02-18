import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import {
	GraphNodeComponent,
	GraphNodeLabelProps,
} from '@/shared/lib/node/component';
import { updateNodeDataHelper } from '../utils/update-node-data-helper';

export const updateNodeLabelFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; label: string }>
) => {
	updateNodeDataHelper<GraphNodeLabelProps>(
		state,
		action.payload.id,
		(data) => (data.label = action.payload.label)
	);
};
