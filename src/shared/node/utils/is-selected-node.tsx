import { useAppSelector } from '@/shared/managers';
import type { NodeProps } from 'reactflow';

export const IsSelectedNode = (node: NodeProps) => {
	const selectedNode = useAppSelector((state) => state.editor.selectedNodeId);
	return selectedNode === node.id
		? 'outline outline-offset-1 outline-solid outline-2 outline-primary'
		: '';
};
