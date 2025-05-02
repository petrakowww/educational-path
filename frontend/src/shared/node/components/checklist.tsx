import clsx from 'clsx';
import { DeleteNodeComponent } from '../utils/delete-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import { ResizeNodeComponent } from '../utils/resize-node';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { OctagonAlertIcon } from 'lucide-react';
import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';

export const ChecklistNode = (props: NodeProps<NodeDataShapeChecklist>) => {
	const { data } = props;
	const focusClassName = IsSelectedNode(props);

	const { setSelectedTodo } = useEditorAsideStore();

	const finalClassName = clsx(
		'relative group h-full w-full rounded-md bg-background border-[2px] flex justify-start',
		focusClassName
	);

	const containerRef = useRef<HTMLDivElement>(null);

	const todoItems = data.checklistProps.todos ?? [];

	const handleDoubleClickTodoItem = (e: React.MouseEvent, id: string) => {
		e.stopPropagation();
		setSelectedTodo(id);
	};

	return (
		<article
			className={finalClassName}
			style={{
				backgroundColor: data.blockProps?.backgroundColor as string,
				borderColor: data.blockProps?.borderColor as string,
			}}
		>
			<div>
				<div
					ref={containerRef}
					className="inline-flex flex-col gap-2 p-3"
				>
					{todoItems.length > 0 ? (
						<div className="flex flex-col gap-1.5">
							{todoItems.map((element) => (
								<div
									key={element.idItem}
									className="flex gap-2 flex-shrink-0"
								>
									<div className="w-6 border border-foreground/50 rounded-md flex-shrink-0 pointer-events-none aspect-square" />
									<span
										className="whitespace-pre-wrap text-nowrap flex-shrink-0"
										onDoubleClick={(e) =>
											handleDoubleClickTodoItem(
												e,
												element.idItem
											)
										}
									>
										{element.label}
									</span>
								</div>
							))}
						</div>
					) : (
						<span className="flex gap-2 flex-shrink-0 whitespace-nowrap text-destructive">
							Список пуст
							<OctagonAlertIcon />
						</span>
					)}
				</div>
			</div>
			<ResizeNodeComponent ref={containerRef} />
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ChecklistNodeMemo = memo(ChecklistNode);
