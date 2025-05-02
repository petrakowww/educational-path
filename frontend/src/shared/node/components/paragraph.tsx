import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import { NodeDataShape } from '@/features/node/editor/types/node';

export const ParagraphNode = (
	props: NodeProps<NodeDataShape>
) => {
	const { data } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full rounded-md bg-background border-[2px] flex justify-center items-center',
		focusClassName
	);

	return (
		<article
			className={finalClassName}
			style={{
				backgroundColor: data.blockProps?.backgroundColor as string,
				borderRadius: data.blockProps?.borderRadius,
				borderWidth: data.blockProps?.borderWidth as number,
				borderColor: data.blockProps?.borderColor as string,
				alignItems:
					data.fontProps?.justification,
				justifyContent:
					data.fontProps?.textAlign,
			}}
		>
			<div ref={containerRef}>
				<p
					className="leading-none whitespace-pre-wrap text-nowrap  p-3 flex-shrink-0"
					style={{
						fontSize: data.fontProps?.fontSize,
						color: data.fontProps?.fontColor as string,
						fontWeight: data.fontProps?.fontWeight,
						padding: data.blockProps?.padding as number,
					}}
				>
					{data.labelProps?.label}
				</p>
			</div>
			<DeleteNodeComponent node={props} />
			<ResizeNodeComponent ref={containerRef} />
		</article>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNode);
