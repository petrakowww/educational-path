import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { SkeletonNode } from './base/skeleton-node';
import { EditableNode } from './base/editable-node';
import { NodeMain } from '@/features/node/editor/types/node';

export const TitleNode = (props: NodeProps<NodeMain>) => {
	const { data } = props;

	return (
		<SkeletonNode nodeProps={props}>
			<EditableNode nodeProps={props} canResize={false}>
				<p
					className="leading-none whitespace-normal text-nowrap text-center p-3 flex-shrink-0"
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

export const TitleNodeMemo = memo(TitleNode);
