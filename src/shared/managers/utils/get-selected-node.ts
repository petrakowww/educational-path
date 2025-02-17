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
