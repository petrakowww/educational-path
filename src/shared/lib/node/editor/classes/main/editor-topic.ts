import { SubTopicNodeComponent, TopicNodeComponent } from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';
import { updateNode } from '@/shared/managers';
import { Node } from 'reactflow';
import { NodeLabelEnum } from '../../../component';

export class GraphNodeTopicEditor extends GraphNodeBaseEditor {
	static changeTopicType(
		newType: string,
		editedNode: Node<TopicNodeComponent | SubTopicNodeComponent>
	): void {
		this.dispatchIfEdited(updateNode, {
			...editedNode,
			type: newType,
			data: {
				...editedNode.data,
				componentType:
					newType === NodeLabelEnum.topic
						? TopicNodeComponent.name
						: SubTopicNodeComponent.name,
			},
		});
	}
}
