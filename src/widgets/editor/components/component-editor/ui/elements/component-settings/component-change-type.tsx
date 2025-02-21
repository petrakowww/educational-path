import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '@/shared/lib/node/component';
import {
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui';
import { Node } from 'reactflow';
import { NodeLabelEnum } from '@/shared/lib/node/component';
import { GraphNodeTopicEditor } from '@/shared/lib/node/editor';

interface ComponentChangeTopicTypeProps {
	editedNode: Node<TopicNodeComponent>;
}

const typePair = {
	[TopicNodeComponent.name]: NodeLabelEnum.topic,
	[SubTopicNodeComponent.name]: NodeLabelEnum.subtopic,
};

export const ComponentChangeTopicType = (
	props: ComponentChangeTopicTypeProps
) => {
	const { editedNode } = props;

	const handleChange = (newType: string) => {
		GraphNodeTopicEditor.changeTopicType(newType, typePair[newType], editedNode);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label className="text-foreground/80">Change topic type</Label>
			<Select
				onValueChange={handleChange}
				value={editedNode.data.componentType}
			>
				<SelectTrigger>
					<SelectValue placeholder="Select type" />
				</SelectTrigger>
				<SelectContent className="z-[10000]">
					<SelectItem value={TopicNodeComponent.name}>
						{NodeLabelEnum.topic}
					</SelectItem>
					<SelectItem value={SubTopicNodeComponent.name}>
						{NodeLabelEnum.subtopic}
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
