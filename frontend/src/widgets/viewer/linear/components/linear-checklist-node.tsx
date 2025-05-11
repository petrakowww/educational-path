import { LinearNodeProps } from '../types';
import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';
import { cn } from '@/shared/lib';
import { Checkbox } from '@/shared/ui';
import { useChecklistProgress } from '@/features/view/hooks/use-checklist-progress';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';
import { CheckCircle } from 'lucide-react';
export const LinearChecklistNode = (
	props: LinearNodeProps<NodeDataShapeChecklist>
) => {
	const { node, isBlocked } = props;
	const { progressMap, handleToggle } = useChecklistProgress(node.id);

	const { isCompleted } = useTopicCompletionStatus(node.id);

	return (
		<div
			className={cn(
				'border rounded p-4',
				isBlocked && 'opacity-50 pointer-events-none'
			)}
		>
			<div className='flex flex-row justify-between mb-2'>
				<h5 className="font-semibold">{node.data.title}</h5>
				{isCompleted && (
					<CheckCircle className="text-primary" />
				)}
			</div>

			<div className="space-y-2">
				{node.data.todos?.length > 0 ? (
					node.data.todos.map((todo) => {
						const isDone = progressMap.get(todo.id) ?? false;
						return (
							<div
								key={todo.id}
								className="flex items-center gap-2"
								onClick={(e) => {
									e.stopPropagation();
									handleToggle(todo.id, isDone);
								}}
							>
								<Checkbox
									checked={isDone}
									onChange={() => {}}
								/>
								<span className="text-sm">{todo.text}</span>
							</div>
						);
					})
				) : (
					<p className="text-sm text-muted-foreground">Нет задач</p>
				)}
			</div>
		</div>
	);
};
