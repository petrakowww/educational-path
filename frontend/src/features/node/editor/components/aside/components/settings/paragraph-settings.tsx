import { NodeDataShape } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IParagraphNodeSettings {
	node: Node<NodeDataShape>;
}

export const ParagraphNodeSettings = ({ node }: IParagraphNodeSettings) => {
	return <BaseSettings nodeHasLabel={true} node={node} />;
};
