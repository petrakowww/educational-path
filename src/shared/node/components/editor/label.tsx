import { LabelNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { useRef } from 'react';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;
const label = 'Label';

export const LabelNodeDisplay = (props: NodeProps<LabelNodeComponent>) => {
	const { data } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'rounded-md overflow-hidden min-h-fit min-w-fit bg-transparent border-none h-full w-full relative flex items-center justify-center',
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
				}}
			>
				<p
					className="leading-none whitespace-pre-wrap text-nowrap text-center flex-shrink-0 px-3"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps?.fontProps.fontColor,
					}}
					ref={containerRef}
				>
					{data.dataTProps.labelProps.label || label}
				</p>
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const LabelNodeMemo = memo(LabelNodeDisplay);
