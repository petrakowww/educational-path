import { GraphNodeComponent } from '@/shared/lib/node/component';
import { NodeInterface } from '../interfaces/node-interface';

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
