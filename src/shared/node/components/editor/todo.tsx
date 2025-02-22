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
		'rounded-md overflow-hidden min-h-fit min-w-fit h-full w-full bg-background border-[2px] relative flex items-center justify-center',
		focusClassName
	);

	const containerRef = useRef<HTMLDivElement>(null);
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
						data.dataTProps?.blockProps?.backgroundColor,
					borderColor: data.dataTProps?.blockProps?.borderColor,
				}}
			>
				<div
					ref={containerRef}
					className="inline-flex gap-2 p-3 items-center"
					style={{
						padding: data.dataTProps?.blockProps?.padding,
					}}
				>
					<div className="w-6 border border-foreground/50 rounded-md flex-shrink-0 pointer-events-none aspect-square" />
					<p
						className="text-left flex-shrink-0  whitespace-pre-wrap text-nowrap  w-full"
						style={{
							fontSize: data.dataTProps?.fontProps?.fontSize,
							color: data.dataTProps?.fontProps?.fontColor,
						}}
					>
						{data.dataTProps.labelProps.label || todoLabel}
					</p>
				</div>

				<ResizeNodeComponent ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TodoNodeMemo = memo(TodoNodeDisplay);
