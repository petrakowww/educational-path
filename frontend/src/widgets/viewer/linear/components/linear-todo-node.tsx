import { Check, CheckCircle } from 'lucide-react';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { useChecklistProgress } from '@/features/view/hooks/use-checklist-progress';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { LinearNodeProps } from '../types';
import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';

export const LinearTodoNode = (props: LinearNodeProps<NodeDataShapeToDo>) => {
	const { node, isBlocked } = props;
	const task = node.data.todos?.[0];
	const taskText = task?.text ?? 'Нет задачи';

	const { progressMap, handleToggle } = useChecklistProgress(node.id);
	const isDone = task ? progressMap.get(task.id) ?? false : false;

	const toggleSidebar = useViewerStore((s) => s.toggleSidebar);
	const setSelectedNodeId = useNodeViewerStore((s) => s.setSelectedNodeId);

    const { isCompleted } = useTopicCompletionStatus(node.id);

	const handleOpen = () => {
		setSelectedNodeId(node.id);
		toggleSidebar();
	};

	return (
		<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
			<div className="flex items-center justify-between mb-1">
                <div className='flex flex-row gap-2'>
				    <h5 className="font-semibold">{node.data.title}</h5>
                    {
                        isCompleted && <CheckCircle  className="text-primary"/>
                    }
                </div>
				<Button
					variant="outline"
					size="sm"
					className="text-xs"
					onClick={handleOpen}
				>
					Перейти
				</Button>
			</div>
			<div className="flex items-center gap-2">
				<div
					className={cn(
						'w-4 h-4 flex items-center justify-center border rounded-md cursor-pointer transition-colors',
						isDone ? 'border-primary text-primary' : 'border-muted'
					)}
					onClick={(e) => {
						e.stopPropagation();
						if (task) handleToggle(task.id, isDone);
					}}
				>
					{isDone && <Check className="w-3 h-3" strokeWidth={3} />}
				</div>
				<p className="text-sm text-muted-foreground truncate">
					{taskText}
				</p>
			</div>
		</div>
	);
};
