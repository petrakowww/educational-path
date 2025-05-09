
import { NodeMain } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IParagraphNodeSettings {
	node: Node<NodeMain>;
}

export const ParagraphNodeSettings = ({ node }: IParagraphNodeSettings) => {
	return <BaseSettings node={node} nodeCanShowLabel={true}/>;
};
