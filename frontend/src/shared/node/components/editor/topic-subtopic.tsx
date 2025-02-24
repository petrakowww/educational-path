import { NodeProps } from 'reactflow';
import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '@/shared/lib/node/component/classes/collectors/topic-node-component';
import { memo } from 'react';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { useRef } from 'react';
import { BackgroundColorEnum } from '@/shared/lib/node/component';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';
import { BoxesIcon } from 'lucide-react';

const minHeight = 52;

const topicLabel = 'Topic Label';
const subTopicLabel = 'SubTopic Label';

export const SubtopicNodeDisplay = (
	props: NodeProps<SubTopicNodeComponent | TopicNodeComponent>
) => {
	const { data } = props;

	const containerRef = useRef<HTMLDivElement>(null);

	const isTopicNode = () => {
		return data.componentType === TopicNodeComponent.name;
	};

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
		isTopicNode() ? 'border-primary' : 'border-border',
		focusClassName
	);

	const topicGroup = data.dataTProps.legendTopicProps?.topicItem;

	return (
		<article
			className={finalClassName}
			style={{
				minHeight: minHeight,
				backgroundColor:
					data.dataTProps.blockProps?.backgroundColor ??
					(isTopicNode()
						? BackgroundColorEnum.Primary
						: BackgroundColorEnum.Highlight),
			}}
		>
			<div ref={containerRef}>
				<p
					className="leading-none whitespace-pre-wrap text-center p-3 flex-shrink-0 text-nowrap"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
					}}
				>
					{data.dataTProps.labelProps.label ||
						(isTopicNode() ? topicLabel : subTopicLabel)}
				</p>
				<ResizeNodeComponent minHeight={minHeight} ref={containerRef} />
			</div>

			{topicGroup && (
				<article className="flex gap-2 mt-2 flex-shrink-0">
					<BoxesIcon style={{ color: topicGroup.color }} />
					<p className="whitespace-nowrap">{topicGroup.label}</p>
				</article>
			)}

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const SubTopicNodeMemo = memo(SubtopicNodeDisplay);
