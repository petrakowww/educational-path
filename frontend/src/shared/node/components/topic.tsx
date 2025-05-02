import { NodeProps } from 'reactflow';
import { memo } from 'react';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import { useRef } from 'react';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import {
	NodeDataShapeSubTopic,
	NodeDataShapeTopic,
	NodeType,
} from '@/features/node/editor/types/node';
import { BackgroundColorsEnum } from '@/features/node/editor/types/colors';

export const TopicNode = (
	props: NodeProps<NodeDataShapeTopic | NodeDataShapeSubTopic>
) => {
	const { data, type } = props;

	const containerRef = useRef<HTMLDivElement>(null);

	const isTopicNode = () => {
		return type === NodeType.topic;
	};

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
		focusClassName
	);

	return (
		<article
			className={finalClassName}
			style={{
				backgroundColor:
					data.blockProps?.backgroundColor ??
					(isTopicNode()
						? BackgroundColorsEnum.Primary
						: BackgroundColorsEnum.Highlight),
			}}
		>
			<div ref={containerRef}>
				<p
					className="leading-none whitespace-pre-wrap text-center p-3 flex-shrink-0 text-nowrap"
					style={{
						fontSize: data.fontProps?.fontSize,
					}}
				>
					{data.labelProps?.label}
				</p>
				<ResizeNodeComponent ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TopicNodeMemo = memo(TopicNode);
