import {
	GraphNodeLegendItemExtended,
	GraphNodeLegendTopicProps,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';
import { GraphNodeComponent } from '@/shared/lib/node/component';
import { useEffect, useState } from 'react';
import {
	GraphNodeLegendEditor,
	GraphNodeTopicEditor,
} from '@/shared/lib/node/editor';
import { Button } from '@/shared/ui';
import { BoxesIcon } from 'lucide-react';
interface ComponentTopicLegendProps {
	editedNode: Node<GraphNodeComponent<GraphNodeLegendTopicProps>>;
}

export const ComponentTopicLegend = (props: ComponentTopicLegendProps) => {
	const [legendItems, setLegendItems] = useState<
		GraphNodeLegendItemExtended[]
	>([]);
	const { editedNode } = props;

	useEffect(() => {
		setLegendItems(GraphNodeLegendEditor.getAllLegendGroups());
	}, [editedNode]);

	const handleSetTopicGroup = (topicId: string, nodeId: string) => {
		GraphNodeTopicEditor.setLegendGroupsForTopic(topicId, nodeId);
	};

	return (
		legendItems.length > 0 && (
			<div className="flex flex-col gap-2">
				<span className="text-foreground/80 text-sm font-medium">
					Select legend
				</span>
				{legendItems.map((element) => (
					<Button
						variant={'outline'}
						className="m-0 h-6 justify-between"
						key={element.idItem}
						onClick={() =>
							handleSetTopicGroup(element.idItem, element.nodeId)
						}
					>
						<BoxesIcon style={{ color: element.color }} />
						<span className="max-w-40 text-ellipsis whitespace-nowrap overflow-hidden text-sm">
							{element.label}
						</span>
					</Button>
				))}
			</div>
		)
	);
};
