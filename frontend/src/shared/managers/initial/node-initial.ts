import { NodeInterface } from '../types/node-interface';
import { GraphNodeComponent } from '@/shared/lib/node/component';

export const initialNodeState: NodeInterface<GraphNodeComponent<unknown>> = {
	selectedNodeId: null,
	nodes: [],
};
