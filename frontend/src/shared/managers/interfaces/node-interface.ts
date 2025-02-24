import { GraphNodeComponent } from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export interface NodeInterface<T extends GraphNodeComponent<unknown>> {
	selectedNodeId: string | null;
	nodes: Node<T>[];
}
