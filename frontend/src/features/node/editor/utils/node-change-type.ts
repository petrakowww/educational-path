import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { Topic } from '../types/extended-node';
import { Node } from 'reactflow';

export const changeTopicType = (node: Node, type: Topic) => {
	const updateNodeProperties = useNodeStore.getState().updateNodeProperties;

	updateNodeProperties({
		nodeId: node.id,
		properties: {
			type: type,
			data: {
				...node.data,
			},
		},
	});
};
