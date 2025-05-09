import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeMain } from '@/features/node/editor/types/node';
import { SkeletonNode } from './base/skeleton-node';
import { EditableNode } from './base/editable-node';

export const LabelNode = (props: NodeProps<NodeMain>) => {
	const { data } = props;

	return (
		<SkeletonNode nodeProps={props}>
			<EditableNode nodeProps={props} canResize={false} canHandle={false}>
				<p
					className="leading-none whitespace-pre-wrap text-nowrap text-center flex-shrink-0 px-3 py-2"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
						color: data.meta.fontProps?.fontColor as string,
					}}
				>
					{data.title}
				</p>
			</EditableNode>
		</SkeletonNode>
	);
};

export const LabelNodeMemo = memo(LabelNode);
