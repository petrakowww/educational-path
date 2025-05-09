import { NodeMain } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IToDoNodeSettings {
	node: Node<NodeMain>;
}

export const ToDoNodeSettings = ({ node }: IToDoNodeSettings) => {
	return <BaseSettings nodeCanShowLabel={true} node={node} />;
};
