import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../utils/delete-node';
import { useRef } from 'react';
import { ResizeNodeComponent } from '../utils/resize-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import { NodeDataShapeButton } from '@/features/node/editor/types/node';

export const ButtonNode = (props: NodeProps<NodeDataShapeButton>) => {
	const { data } = props;
	
	const containerRef = useRef<HTMLDivElement>(null);

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md bg-primary',
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
			}}
		>
			<div ref={containerRef}>
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
			</div>
			<ResizeNodeComponent ref={containerRef} />
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ButtonNodeMemo = memo(ButtonNode);
