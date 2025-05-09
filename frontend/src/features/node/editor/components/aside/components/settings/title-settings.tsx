import { NodeMain } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface ITitleNodeSettings {
	node: Node<NodeMain>;
}

export const TitleNodeSettings = ({ node }: ITitleNodeSettings) => {
	return <BaseSettings nodeCanShowLabel={true} node={node} />;
};
