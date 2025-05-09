import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import type { NodeProps } from 'reactflow';

export const IsSelectedNode = (node: NodeProps) => {
	const { selectedNode } = useNodeStore(
		(state) => ({ selectedNode: state.selectedNode }),
		(a, b) => a.selectedNode?.id === b.selectedNode?.id
	);
	return selectedNode?.id === node.id;
};

export const IsSelectedViewNode = (node: NodeProps) => {
	const { selectedNodeId } = useNodeViewerStore(
		(state) => ({ selectedNodeId: state.selectedNodeId }),
		(a, b) => a.selectedNodeId === b.selectedNodeId
	);
	return selectedNodeId === node.id;
};
