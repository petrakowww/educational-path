import { GlobalGraphNodeTypesComponents } from '@/shared/lib/node/component';
import { RootState } from '../redux/redux-store';
import { Node } from 'reactflow';

export const getSelectedNode = (
	state: RootState
): Node<GlobalGraphNodeTypesComponents> | null => {
	if (!state.editor.selectedNodeId) return null;
	return (
		state.editor.nodes.find((n) => n.id === state.editor.selectedNodeId) ||
		null
	);
};
