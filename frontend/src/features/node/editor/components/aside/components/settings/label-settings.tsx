import { Node } from 'reactflow';
import { BaseSettings } from './base-settings';
import { NodeDataShape } from '@/features/node/editor/types/node';

interface ILabelNodeSettings {
	node: Node<NodeDataShape>;
}

export const LabelNodeSettings = ({ node }: ILabelNodeSettings) => {
	return (
		<BaseSettings
			node={node}
            nodeHasLabel={true}
		/>
	);
};
