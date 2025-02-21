import { LegendNodeComponent } from '@/shared/lib/node/component/classes/collectors/legend-node-component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import clsx from 'clsx';
import { IsSelectedNode } from '../utils/is-selected-node';
import { BoxesIcon } from 'lucide-react';

const minHeight = 52;

export const LegendNodeDisplay = (props: NodeProps<LegendNodeComponent>) => {
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
					className="inline-flex flex-col gap-2 p-3"
				>
					<p
						className="text-left flex-shrink-0 whitespace-nowrap"
						style={{
							fontSize: data.dataTProps?.fontProps?.fontSize,
							color: data.dataTProps?.fontProps?.fontColor,
						}}
					>
						{data.dataTProps?.labelProps?.label}
					</p>
					{data.dataTProps?.legendProps?.legendItems.length > 0 && (
						<div className="flex flex-col gap-1.5">
							{data.dataTProps.legendProps.legendItems.map(
								(element) => (
									<div
										key={element.idItem}
										className="flex gap-2 flex-shrink-0"
									>
										<BoxesIcon
											style={{ color: element.color }}
										/>
										<span className="whitespace-nowrap">
											{element.label}
										</span>
									</div>
								)
							)}
						</div>
					)}
				</div>

				<ResizeNodeComponent ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const LegendNodeMemo = memo(LegendNodeDisplay);
