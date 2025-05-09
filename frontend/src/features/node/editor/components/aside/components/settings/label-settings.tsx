import { Node } from 'reactflow';
import { BaseSettings } from './base-settings';
import { NodeMain } from '@/features/node/editor/types/node';

interface ILabelNodeSettings {
	node: Node<NodeMain>;
}

export const LabelNodeSettings = ({ node }: ILabelNodeSettings) => {
	return <BaseSettings node={node} nodeCanShowLabel={true} />;
};
