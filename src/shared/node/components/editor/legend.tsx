import { LegendNodeComponent } from '@/shared/lib/node/component/classes/collectors/legend-node-component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import clsx from 'clsx';
import { IsSelectedNode } from '../../utils/is-selected-node';
import { BoxesIcon, OctagonAlertIcon } from 'lucide-react';
import { GraphNodeLegendEditor } from '@/shared/lib/node/editor';

const minHeight = 52;

const legendLabel = 'Legend Label';

export const LegendNodeDisplay = (props: NodeProps<LegendNodeComponent>) => {
	const { data } = props;

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full rounded-md bg-background border-[2px] flex justify-start',
		focusClassName
	);

	const containerRef = useRef<HTMLDivElement>(null);

	const handleDeleteLegendNode = () => {
		GraphNodeLegendEditor.deleteLegendComponent(props.id);
	};

	const handleDoubleClickLegendItem = (e: React.MouseEvent, id: string) => {
		e.stopPropagation();
		GraphNodeLegendEditor.setLegendFocusOnEditorItem(id);
	};

	return (
		<article
			className={finalClassName}
			style={{
				minHeight: minHeight,
				backgroundColor: data.dataTProps?.blockProps?.backgroundColor,
				borderColor: data.dataTProps?.blockProps?.borderColor,
			}}
		>
			<div>
				<div
					ref={containerRef}
					className="inline-flex flex-col gap-2 p-3"
				>
					{data.dataTProps?.labelProps?.label && (
						<p
							className="text-left flex-shrink-0 whitespace-nowrap w-full"
							style={{
								fontSize: data.dataTProps?.fontProps?.fontSize,
								color: data.dataTProps?.fontProps?.fontColor,
							}}
						>
							{data.dataTProps.labelProps.label}
						</p>
					)}

					{data.dataTProps?.legendProps?.legendItems.length > 0 ? (
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
										<span
											className="whitespace-pre-wrap text-nowrap"
											onDoubleClick={(e) =>
												handleDoubleClickLegendItem(
													e,
													element.idItem
												)
											}
										>
											{element.label === ''
												? legendLabel
												: element.label}
										</span>
									</div>
								)
							)}
						</div>
					) : (
						<span className="flex gap-2 flex-shrink-0 whitespace-nowrap text-destructive">
							Legend is empty
							<OctagonAlertIcon />
						</span>
					)}
				</div>
			</div>
			<ResizeNodeComponent ref={containerRef} />
			<DeleteNodeComponent
				node={props}
				callbackDeleteNode={handleDeleteLegendNode}
			/>
		</article>
	);
};

export const LegendNodeMemo = memo(LegendNodeDisplay);
