import { NodeProps } from 'reactflow';
import { memo } from 'react';

import {
	NodeDataShapeSubTopic,
	NodeDataShapeTopic,
} from '@/features/node/editor/types/node';
import { SkeletonNode } from './base/skeleton-editor-node';
import { EditableNode } from './base/editable-node';

export const TopicNode = (
	props: NodeProps<NodeDataShapeTopic | NodeDataShapeSubTopic>
) => {
	const { data } = props;

	return (
		<SkeletonNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps?.backgroundColor ?? '',
			}}
		>
			<EditableNode nodeProps={props}>
				<p
					className="leading-none whitespace-pre-wrap text-center p-3 flex-shrink-0 text-nowrap"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
					}}
				>
					{data.title}
				</p>
			</EditableNode>
		</SkeletonNode>
	);
};

export const TopicNodeMemo = memo(TopicNode);
