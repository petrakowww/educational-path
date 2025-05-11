import { memo, useCallback } from 'react';
import { NodeProps } from 'reactflow';
import { Check } from 'lucide-react';
import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';
import { useChecklistProgress } from '@/features/view/hooks/use-checklist-progress';
import { cn } from '@/shared/lib';

export const TodoViewNode = (props: NodeProps<NodeDataShapeToDo>) => {
	const { data, id: nodeId } = props;
	const task = data.todos?.[0];
	const taskText = task?.text ?? 'Задача не задана';
	const title = data.title ?? 'Без названия';

	const { isCompleted } = useTopicCompletionStatus(nodeId);
	const { progressMap, handleToggle } = useChecklistProgress(nodeId);

	const toggleSidebar = useViewerStore((s) => s.toggleSidebar);
	const setSelectedNodeId = useNodeViewerStore((s) => s.setSelectedNodeId);

	const handleClick = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			setSelectedNodeId(nodeId);
			toggleSidebar();
		},
		[nodeId, setSelectedNodeId, toggleSidebar]
	);

	const isDone = task ? (progressMap.get(task.id) ?? false) : false;

	return (
		<SkeletonViewNode
			nodeProps={props}
			onClick={handleClick}
			style={{
				backgroundColor: data.meta.blockProps?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
			stylesForComponent="justify-center items-start"
			isCompleted={isCompleted}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={false}>
				<div
					className="w-full relative flex items-center justify-center px-3 py-4"
					style={{ padding: data.meta.blockProps?.padding ?? 8 }}
				>
					<span className="absolute top-[-20px] right-2 text-xs text-muted-foreground truncate max-w-[60%]">
						{title}
					</span>

					{task ? (
						<div className="flex items-center gap-2 max-w-full overflow-hidden">
							<div
								className={`w-5 h-5 flex items-center justify-center border rounded-md flex-shrink-0 transition-colors ${
									isDone ? 'border-primary text-primary' : 'border-card-foreground'
								}`}
								onClick={(e) => {
									e.stopPropagation();
									handleToggle(task.id, isDone);
								}}
							>
								{isDone && <Check className="w-3 h-3" strokeWidth={3} />}
							</div>
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
					) : (
						<p className={cn("text-xs", isCompleted && 'py-1')}>Нет задачи для выполнения</p>
					)}
				</div>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const TodoViewNodeMemo = memo(TodoViewNode);
