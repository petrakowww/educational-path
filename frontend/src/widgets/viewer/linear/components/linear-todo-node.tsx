import { TopicTreeNode } from "../utils";

export const LinearTodoNode = ({
	node,
	isBlocked,
}: {
	node: TopicTreeNode;
	isBlocked: boolean;
}) => {
	const task = node.data.todos?.[0];
	return (
		<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
			<h5 className="font-semibold mb-1">{node.title}</h5>
			<p className="text-sm text-muted-foreground">{task?.text ?? 'Нет задачи'}</p>
		</div>
	);
};
