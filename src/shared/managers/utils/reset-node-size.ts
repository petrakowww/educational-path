import { setNodes, store } from '@/shared/managers';
import { Node } from 'reactflow';
import { GlobalGraphNodeTypesComponents } from '@/shared/lib/node/component';

export const resetNodeSize = (
	nodeId: string,
	width: number | null,
	height: number | null
) => {
	const state = store.getState();
	const nodes = state.editor.nodes;

	const updatedNodes = nodes.map(
		(node: Node<GlobalGraphNodeTypesComponents>) =>
			node.id === nodeId
				? {
						...node,
						width,
						height,
						style: {
							...node.style,
							width: width ?? '',
							height: height ?? '',
						},
					}
				: node
	);

	store.dispatch(setNodes(updatedNodes));
};
