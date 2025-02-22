import {
	GraphNodeLegendItem,
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';
import { updateNode } from '@/shared/managers';
import { Node } from 'reactflow';

export class GraphNodeTopicEditor extends GraphNodeBaseEditor {
	static changeTopicType(
		type: string,
		enumType: string,
		editedNode: Node<TopicNodeComponent | SubTopicNodeComponent>
	): void {
		this.dispatchIfEdited(updateNode, {
			...editedNode,
			type: enumType,
			data: {
				...editedNode.data,
				componentType: type,
			},
		});
	}

	static setLegendGroupsForTopic(legend: GraphNodeLegendItem) {
		this.updateProperty('legendTopicProps', 'topicItem', legend);
	}
}
