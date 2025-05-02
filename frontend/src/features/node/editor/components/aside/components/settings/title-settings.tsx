import { NodeDataShape } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface ITitleNodeSettings {
	node: Node<NodeDataShape>;
}

export const TitleNodeSettings = ({ node }: ITitleNodeSettings) => {
	return <BaseSettings nodeHasLabel={true} node={node} />;
};
