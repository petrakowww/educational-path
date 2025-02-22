import { ButtonNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { useRef } from 'react';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;

const buttonLabel = 'Button Label';

export const ButtonNodeDisplay = (props: NodeProps<ButtonNodeComponent>) => {
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
				minHeight: minHeight,
				backgroundColor: data.dataTProps.blockProps?.backgroundColor,
				borderRadius: data.dataTProps.blockProps?.borderRadius,
				borderWidth: data.dataTProps.blockProps?.borderWidth,
				borderColor: data.dataTProps.blockProps?.borderColor,
			}}
		>
			<div ref={containerRef}>
				<p
					className="p-3 leading-none whitespace-pre-wrap text-nowrap  text-center flex-shrink-0 text-primary-foreground"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
					}}
				>
					{data.dataTProps.labelProps.label || buttonLabel}
				</p>
			</div>
			<ResizeNodeComponent minHeight={minHeight} ref={containerRef} />
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ButtonNodeMemo = memo(ButtonNodeDisplay);
