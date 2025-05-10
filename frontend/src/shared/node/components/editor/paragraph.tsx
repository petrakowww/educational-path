import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeMain } from '@/features/node/editor/types/node';
import { EditableNode } from './base/editable-node';
import { SkeletonNode } from './base/skeleton-editor-node';

export const ParagraphNode = (props: NodeProps<NodeMain>) => {
	const { data } = props;
	return (
		<SkeletonNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderRadius: data.meta.blockProps?.borderRadius,
				borderWidth: data.meta.blockProps?.borderWidth as number,
				borderColor: data.meta.blockProps?.borderColor as string,
				alignItems: data.meta.fontProps?.justification,
				justifyContent: data.meta.fontProps?.textAlign,
			}}
		>
			<EditableNode nodeProps={props}>
				<p
					className="leading-none whitespace-pre-wrap break-all p-3"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
						color: data.meta.fontProps?.fontColor as string,
						fontWeight: data.meta.fontProps?.fontWeight,
						padding: data.meta.blockProps?.padding as number,
					}}
				>
					{data.title}
				</p>
			</EditableNode>
		</SkeletonNode>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNode);
