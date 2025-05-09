import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IChecklistNodeSettings {
	node: Node<NodeDataShapeButton>;
}

export const ChecklistNodeSettings = ({ node }: IChecklistNodeSettings) => {
	return <BaseSettings node={node} nodeCanShowLabel={false}/>;
};
