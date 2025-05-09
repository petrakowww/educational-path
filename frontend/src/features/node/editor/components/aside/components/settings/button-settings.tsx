import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IButtonNodeSettings {
	node: Node<NodeDataShapeButton>;
}

export const ButtonNodeSettings = ({ node }: IButtonNodeSettings) => {
	return <BaseSettings nodeCanShowLabel={true} node={node} />;
};
