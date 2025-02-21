import { GraphNodeComponent } from '@/shared/lib/node/component';
import { RootState } from '../redux/redux-store';
import { Node } from 'reactflow';

export const getSelectedNode = <T>(
	state: RootState
): Node<GraphNodeComponent<T>> | null => {
	if (!state.editor.selectedNodeId) return null;
	return (
		(state.editor.nodes.find(
			(n) => n.id === state.editor.selectedNodeId
		) as Node<GraphNodeComponent<T>>) || null
	);
};

export const getNodesByProperty = <T>(
	state: RootState,
	key: keyof GraphNodeComponent<T>['dataTProps']
): Node<GraphNodeComponent<T>>[] => {
	return state.editor.nodes.filter(
		(node) =>
			node.data?.dataTProps &&
			typeof node.data.dataTProps === 'object' &&
			node.data.dataTProps !== null &&
			key in node.data.dataTProps
	) as Node<GraphNodeComponent<T>>[];
};

export const getNodeById = <T>(
	state: RootState,
	id: string
): Node<GraphNodeComponent<T>> | null => {
	return (
		(state.editor.nodes.find((node) => node.id === id) as Node<
			GraphNodeComponent<T>
		>) || null
	);
};
