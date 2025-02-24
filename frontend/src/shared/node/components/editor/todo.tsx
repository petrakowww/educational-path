import { TodoNodeComponent } from '@/shared/lib/node/component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;
const todoLabel = 'Todo Label';

export const TodoNodeDisplay = (props: NodeProps<TodoNodeComponent>) => {
	const { data } = props;
	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-start justify-start border-[2px] rounded-md',
		focusClassName
	);

	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<article
			className={finalClassName}
			style={{
				backgroundColor: data.dataTProps?.blockProps?.backgroundColor,
				borderColor: data.dataTProps?.blockProps?.borderColor,
				minHeight: minHeight,
			}}
		>
			<div>
				<div
					ref={containerRef}
					className="inline-flex gap-2 p-3 items-center"
					style={{
						padding: data.dataTProps?.blockProps?.padding,
					}}
				>
					<div className="w-6 border border-foreground/50 rounded-md flex-shrink-0 pointer-events-none aspect-square" />
					<p
						className="text-left flex-shrink-0  whitespace-pre-wrap text-nowrap"
						style={{
							fontSize: data.dataTProps?.fontProps?.fontSize,
							color: data.dataTProps?.fontProps?.fontColor,
						}}
					>
						{data.dataTProps.labelProps.label || todoLabel}
					</p>
				</div>
			</div>
			<ResizeNodeComponent ref={containerRef} />
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TodoNodeMemo = memo(TodoNodeDisplay);
