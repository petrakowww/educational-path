import { GraphNodeComponent } from '@/shared/lib/node/component';
import { Node } from 'reactflow';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface NodeInterface<T extends GraphNodeComponent<any> = GraphNodeComponent<any>> {
	selectedNodeId: string | null;
	nodes: Node<T>[];
  }
