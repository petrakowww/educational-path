import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import { SkeletonNode } from './base/skeleton-editor-node';
import { EditableNode } from './base/editable-node';

export const TodoNode = (props: NodeProps<NodeDataShapeToDo>) => {
	const { data } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const taskText = data.todos?.[0]?.text ?? 'Задача не задана';
	const todos = data.todos ?? [];
	const title = data.title ?? 'Без названия';

	return (
		<SkeletonNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
		>
			<EditableNode nodeProps={props} canResize={false} canHandle={false}>
				<div
					ref={containerRef}
					className="w-full relative flex items-center justify-center px-3 py-4"
					style={{
						padding: data.meta.blockProps?.padding ?? 8,
					}}
				>
					<span className="absolute top-[-20px] right-2 text-xs text-muted-foreground truncate max-w-[60%]">
						{title}
					</span>

					<div className="flex items-center gap-2 max-w-full overflow-hidden">
						{todos.length > 0 && (
							<div className="w-5 h-5 border border-foreground/50 rounded-md flex-shrink-0 pointer-events-none" />
						)}
						<p
							className="text-sm leading-snug text-left truncate"
							style={{
								fontSize: data.meta.fontProps?.fontSize,
								color: data.meta.fontProps?.fontColor as string,
							}}
							title={taskText}
						>
							{taskText}
						</p>
					</div>
				</div>
			</EditableNode>
		</SkeletonNode>
	);
};

export const TodoNodeMemo = memo(TodoNode);
