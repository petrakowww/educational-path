import { useNodeStore } from '@/shared/managers/store/nodes.store';
import type { NodeProps } from 'reactflow';

export const IsSelectedNode = (node: NodeProps) => {
	const { selectedNode } = useNodeStore(
		(state) => ({ selectedNode: state.selectedNode }),
		(a, b) => a.selectedNode?.id === b.selectedNode?.id
	);
	return selectedNode?.id === node.id
		? 'outline outline-offset-1 outline-solid outline-2 outline-primary'
		: '';
};
