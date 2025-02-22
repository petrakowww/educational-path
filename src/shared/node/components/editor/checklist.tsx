import clsx from 'clsx';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ChecklistNodeComponent } from '@/shared/lib/node/component';
import { OctagonAlertIcon } from 'lucide-react';
import { GraphNodeChecklistEditor } from '@/shared/lib/node/editor';

const minHeight = 52;

const checklistLabel = 'Checklist Label';

export const TodoNodeDisplay = (props: NodeProps<ChecklistNodeComponent>) => {
	const { data } = props;
	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'rounded-md overflow-hidden min-h-fit min-w-fit h-full w-full bg-background border-[2px] relative flex items-center justify-center',
		focusClassName
	);

	const containerRef = useRef<HTMLDivElement>(null);

	const handleDoubleClickTodoItem = (e: React.MouseEvent, id: string) => {
		e.stopPropagation();
		GraphNodeChecklistEditor.setTodoFocusOnEditorItem(id);
	};

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
					{data.dataTProps?.checkListProps?.todoItems.length > 0 ? (
						<div className="flex flex-col gap-1.5">
							{data.dataTProps.checkListProps.todoItems.map(
								(element) => (
									<div
										key={element.idItem}
										className="flex gap-2 flex-shrink-0"
									>
										<div className="w-6 border border-foreground/50 rounded-md flex-shrink-0 pointer-events-none aspect-square" />
										<span
											className="whitespace-pre-wrap text-nowrap  w-full flex-shrink-0"
											onDoubleClick={(e) =>
												handleDoubleClickTodoItem(
													e,
													element.idItem
												)
											}
										>
											{element.label || checklistLabel}
										</span>
									</div>
								)
							)}
						</div>
					) : (
						<span className="flex gap-2 flex-shrink-0 whitespace-nowrap text-destructive">
							Checklist is empty
							<OctagonAlertIcon />
						</span>
					)}
				</div>

				<ResizeNodeComponent ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ChecklistNodeMemo = memo(TodoNodeDisplay);
