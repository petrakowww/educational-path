import { memo, useRef } from 'react';
import clsx from 'clsx';
import { NodeProps } from 'reactflow';
import { OctagonAlertIcon } from 'lucide-react';

import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';
import { useEditorAsideStore } from '@/shared/managers/store/editor/editor.store';
import { SkeletonNode } from './base/skeleton-node';
import { EditableNode } from './base/editable-node';

export const ChecklistNode = (props: NodeProps<NodeDataShapeChecklist>) => {
	const { data } = props;
	const focusRef = useRef<HTMLDivElement>(null);
	const { setSelectedTodo } = useEditorAsideStore();

	const todoItems = data.todos ?? [];

	const handleDoubleClickTodoItem = (e: React.MouseEvent, id: string) => {
		e.stopPropagation();
		setSelectedTodo(id);
	};

	return (
		<SkeletonNode
			nodeProps={props}
			stylesForComponent="justify-start items-start"
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
		>
			<EditableNode nodeProps={props} canResize={false} canHandle={false}>
				<div ref={focusRef} className="flex flex-col gap-2 p-3">
					{todoItems.length > 0 ? (
						<div className="flex flex-col gap-1.5">
							{todoItems.map((todo) => (
								<div key={todo.id} className="flex gap-2">
									<div className="w-6 h-6 aspect-square border border-foreground/50 rounded-md cursor-pointer" />
									<span
										className="whitespace-pre-wrap text-nowrap text-lg flex-shrink-0"
										onDoubleClick={(e) =>
											handleDoubleClickTodoItem(
												e,
												todo.id
											)
										}
									>
										{todo.text || 'Задача списка не задана'}
									</span>
								</div>
							))}
						</div>
					) : (
						<span className="flex items-center gap-2 text-destructive whitespace-nowrap">
							Список пуст
							<OctagonAlertIcon className="w-4 h-4" />
						</span>
					)}
				</div>
			</EditableNode>
		</SkeletonNode>
	);
};

export const ChecklistNodeMemo = memo(ChecklistNode);
