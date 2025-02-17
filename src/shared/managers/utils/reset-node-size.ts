import { GraphNodeComponent } from '@/shared/lib/node/component';
import { setNodes, store } from '@/shared/managers';
import { Node } from 'reactflow';

export const resetNodeSize = (
	nodeId: string,
	width: number | null | undefined,
	height: number | null | undefined
) => {
	const state = store.getState();
	const nodes = state.editor.nodes;

	const updatedNodes = nodes.map(
		(node: Node<GraphNodeComponent<unknown>>) =>
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
