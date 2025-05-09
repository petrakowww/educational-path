import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { Node } from 'reactflow';

export const autoSizeNode = (node: Node) => {
	const { updateNodeProperties } = useNodeStore.getState();

	console.log(node);
	if (!node) return;

	updateNodeProperties({
		nodeId: node.id,
		properties: {
			style: {
				...node.style,
				width: '',
				height: '',
			},
		} as Node,
	});
};
