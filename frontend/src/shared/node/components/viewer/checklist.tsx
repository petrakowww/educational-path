import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { CheckCircle } from 'lucide-react';
import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';
import { useChecklistProgress } from '@/features/view/hooks/use-checklist-progress';
import { Check } from 'lucide-react';

export const ChecklistViewNode = (props: NodeProps<NodeDataShapeChecklist>) => {
	const { data, id: nodeId } = props;
	const { isCompleted } = useTopicCompletionStatus(nodeId);
	const { progressMap, handleToggle } = useChecklistProgress(nodeId);

	return (
		<SkeletonViewNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
			stylesForComponent="justify-start items-start"
			isCompleted={isCompleted}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={false}>
				<div className="flex flex-col gap-2 p-3">
					{data.todos.length > 0 ? (
						<div className="flex flex-col gap-1.5">
							{data.todos.map((todo) => {
								const isDone = progressMap.get(todo.id) ?? false;
								return (
									<div key={todo.id} className="flex gap-2 items-center">
										<div
											className={`w-4 h-4 flex items-center justify-center border rounded-md cursor-pointer transition-colors ${
												isDone
													? 'border-primary text-primary'
													: 'border-card-foreground'
											}`}
											onClick={(e) => {
												e.stopPropagation();
												handleToggle(todo.id, isDone);
											}}
										>
											{isDone && (
												<Check className="w-3 h-3" strokeWidth={3} />
											)}
										</div>
										<span className="text-base text-foreground text-nowrap whitespace-pre-wrap">
											{todo.text || 'Без текста'}
										</span>
									</div>
								);
							})}
						</div>
					) : (
						<span className="text-xs text-muted-foreground">Список задач пуст</span>
					)}
					{isCompleted && (
						<CheckCircle className="absolute top-1 right-1 w-4 h-4 text-primary" />
					)}
				</div>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const ChecklistViewNodeMemo = memo(ChecklistViewNode);
