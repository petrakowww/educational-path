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
		'rounded-md overflow-hidden border-[1px] border-border min-h-fit min-w-fit h-full w-full bg-primary relative flex items-center justify-center',
		focusClassName
	);
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
						data.dataTProps.blockProps?.backgroundColor,
					borderRadius: data.dataTProps.blockProps?.borderRadius,
					borderWidth: data.dataTProps.blockProps?.borderWidth,
					borderColor: data.dataTProps.blockProps?.borderColor,
				}}
			>
				<p
					className="leading-none  whitespace-pre-wrap text-nowrap  text-center p-4 flex-shrink-0 text-primary-foreground"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
					}}
					ref={containerRef}
				>
					{data.dataTProps.labelProps.label || buttonLabel}
				</p>
				<ResizeNodeComponent minHeight={minHeight} ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ButtonNodeMemo = memo(ButtonNodeDisplay);
