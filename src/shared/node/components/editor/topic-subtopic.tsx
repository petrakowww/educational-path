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
		'rounded-md overflow-hidden border-[2px] min-h-fit min-w-fit h-full w-full bg-background relative flex items-center justify-center',
		isTopicNode() ? 'border-primary' : 'border-border',
		focusClassName
	);

	const topicGroup = data.dataTProps.legendTopicProps?.topicItem;

	return (
		<article
			className="relative group min-h-fit min-w-fit h-full w-full inline-block"
			style={{ minHeight: minHeight }}
		>
			<div
				className={finalClassName}
				style={{
					width: '',
					height: '',
					backgroundColor:
						data.dataTProps.blockProps?.backgroundColor ??
						(isTopicNode()
							? BackgroundColorEnum.Primary
							: BackgroundColorEnum.Highlight),
				}}
			>
				<p
					className="leading-none whitespace-normal text-center p-4 flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
					}}
					ref={containerRef}
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
