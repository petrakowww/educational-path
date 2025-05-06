import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../utils/delete-node';
import { useRef } from 'react';
import { ResizeNodeComponent } from '../utils/resize-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { SkeletonNode } from './base/skeleton-node';
import { EditableNode } from './base/editable-node';

export const ButtonNode = (props: NodeProps<NodeDataShapeButton>) => {
	const { data } = props;

	return (
		<SkeletonNode
			nodeProps={props}
			style={{
				backgroundColor: data.blockProps?.backgroundColor as string,
				borderRadius: data.blockProps?.borderRadius,
				borderWidth: data.blockProps?.borderWidth as number,
				borderColor: data.blockProps?.borderColor as string,
			}}
			stylesForComponent={'bg-primary'}
		>
			<EditableNode nodeProps={props}>
				<p
					className="p-3 leading-none whitespace-pre-wrap text-nowrap  text-center flex-shrink-0 text-primary-foreground"
					style={{
						fontSize: data.fontProps?.fontSize,
						color: data.fontProps?.fontColor as string,
						fontWeight: data.fontProps?.fontWeight,
					}}
				>
					{data.labelProps?.label}
				</p>
			</EditableNode>
		</SkeletonNode>
	);
};

export const ButtonNodeMemo = memo(ButtonNode);