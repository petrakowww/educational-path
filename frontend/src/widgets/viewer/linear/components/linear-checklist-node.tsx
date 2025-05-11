import { TopicTreeNode } from "../utils";

export const LinearChecklistNode = ({
	node,
	isBlocked,
}: {
	node: TopicTreeNode;
	isBlocked: boolean;
}) => (
	<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
		<h5 className="font-semibold mb-2">{node.title}</h5>
		<ul className="list-disc pl-5 text-sm space-y-1">
			{node.data.todos?.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			)) ?? <li>Нет задач</li>}
		</ul>
	</div>
);
