import {
	GraphNodeLegendItem,
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
import { useAppSelector } from '@/shared/managers';
interface ComponentTopicLegendProps {
	editedNode: Node<GraphNodeComponent<GraphNodeLegendTopicProps>>;
}

export const ComponentTopicLegend = (props: ComponentTopicLegendProps) => {
	const [legendItems, setLegendItems] = useState<GraphNodeLegendItem[]>([]);
	const { editedNode } = props;
	const nodes = useAppSelector((state) => state.editor.nodes);

	useEffect(() => {
		setLegendItems(GraphNodeLegendEditor.getAllLegendGroups());
	}, [editedNode, nodes]);

	const handleSetTopicGroup = (value: GraphNodeLegendItem) => {
		GraphNodeTopicEditor.setLegendGroupsForTopic(value);
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
						onClick={() => handleSetTopicGroup(element)}
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
