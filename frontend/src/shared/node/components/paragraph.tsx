import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import { NodeMain } from '@/features/node/editor/types/node';
import { EditableNode } from './base/editable-node';
import { SkeletonNode } from './base/skeleton-node';

export const ParagraphNode = (props: NodeProps<NodeMain>) => {
	const { data } = props;
	return (
		<SkeletonNode
			nodeProps={props}
			style={{
				backgroundColor: data.blockProps?.backgroundColor as string,
				borderRadius: data.blockProps?.borderRadius,
				borderWidth: data.blockProps?.borderWidth as number,
				borderColor: data.blockProps?.borderColor as string,
				alignItems: data.fontProps?.justification,
				justifyContent: data.fontProps?.textAlign,
			}}
		>
			<EditableNode nodeProps={props}>
				<p
					className="leading-none whitespace-pre-wrap break-all p-3"
					style={{
						fontSize: data.fontProps?.fontSize,
						color: data.fontProps?.fontColor as string,
						fontWeight: data.fontProps?.fontWeight,
						padding: data.blockProps?.padding as number,
					}}
				>
					{data.labelProps?.label}
				</p>
			</EditableNode>
		</SkeletonNode>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNode);
