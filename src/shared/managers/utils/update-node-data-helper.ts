import { GraphNodeComponent } from '@/shared/lib/node/component';
import { NodeInterface } from '../interfaces/node-interface';
import { PayloadAction } from '@reduxjs/toolkit';

export function updateNodeDataHelper<T>(
	state: NodeInterface<GraphNodeComponent<unknown>>,
	id: string,
	updater: (data: T) => void
) {
	const node = state.nodes.find((n) => n.id === id);
	if (node) {
		updater(node.data.dataTProps as T);
	}
}

interface NodePropertyUpdater<T, K extends keyof T> {
	id: string;
	targetObject: keyof T;
	key: keyof T[K];
	value: T[K][keyof T[K]];
}

export const updateNodePropertyFunction = <T>(
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<NodePropertyUpdater<T, keyof T>>
) => {
	updateNodeDataHelper<T>(state, action.payload.id, (data) => {
		if (data[action.payload.targetObject]) {
			data[action.payload.targetObject][action.payload.key] =
				action.payload.value;
		}
	});
};
