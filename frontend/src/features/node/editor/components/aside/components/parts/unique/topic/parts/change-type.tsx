import {
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui';
import { Node } from 'reactflow';
import { changeTopicType } from '@/features/node/editor/utils/node-change-type';
import { NodeLabel, NodeType } from '@/features/node/editor/types/node';
import { Topic } from '@/features/node/editor/types/extended-node';
import { useState } from 'react';

interface ComponentChangeTopicTypeProps {
	node: Node;
}

export const ComponentChangeTopicType = ({
	node,
}: ComponentChangeTopicTypeProps) => {
	const [currentType, setCurrentType] = useState<Topic>(node.type as Topic);

	const handleChange = (newType: Topic) => {
		changeTopicType(node, newType);
		setCurrentType(newType);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label className="text-foreground/80">Изменить тип топика</Label>
			<Select onValueChange={handleChange} value={currentType}>
				<SelectTrigger>
					<SelectValue placeholder="Изменить тип" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={NodeType.topic}>
						{NodeLabel.topic}
					</SelectItem>
					<SelectItem value={NodeType.subtopic}>
						{NodeLabel.subtopic}
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
