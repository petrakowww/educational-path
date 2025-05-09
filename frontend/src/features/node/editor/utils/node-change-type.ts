import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { Topic } from '../types/extended-node';
import { Node } from 'reactflow';
import { nodeBuilderRegistry } from '../config/node-templates-config';
import { NodeDataShapeTopic, NodeMain } from '../types/node';

export const changeTopicType = (node: Node<NodeMain>, type: Topic) => {
	const updateNodeProperties = useNodeStore.getState().updateNodeProperties;
	const builderFn = nodeBuilderRegistry[type];

	const data = builderFn().getData() as NodeDataShapeTopic;

	updateNodeProperties({
		nodeId: node.id,
		properties: {
			type: type,
			data: {
				meta: {
					blockProps: {
						backgroundColor: data.meta.blockProps?.backgroundColor,
					},
				},
			},
		},
	});
};
