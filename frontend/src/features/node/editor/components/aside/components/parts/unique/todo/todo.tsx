import { Node } from 'reactflow';
import { useEffect, useState } from 'react';
import { Input } from '@/shared/ui';
import { ChecklistItem } from '@/shared/graphql/generated/output';
import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import { WithChecklistTodosCommand } from '../checklist/utils';

interface ComponentToDoProps {
	node: Node<NodeDataShapeToDo>;
}

export const ComponentToDo = ({ node }: ComponentToDoProps) => {
	const [todo, setTodo] = useState<ChecklistItem>(
		node.data.todos?.[0] ?? {
			id: crypto.randomUUID(),
			text: '',
			topicNodeId: node.id,
		}
	);

	const updateTodo = (newText: string) => {
		const updated: ChecklistItem = {
			...todo,
			text: newText,
		};
		const cmd = new WithChecklistTodosCommand(node.id, [updated]);
		cmd.execute();
		setTodo(updated);
	};

	useEffect(() => {
		if (node.data.todos?.[0]) {
			setTodo(node.data.todos[0]);
		}
	}, [node]);

	return (
		<div className="flex flex-col gap-2">
			<span className="text-foreground/80 text-sm font-medium">
				Задача
			</span>
			<Input
				className="h-6 px-1.5 text-sm"
				type="text"
				placeholder="Введите текст задачи"
				value={todo.text}
				onChange={(e) => updateTodo(e.target.value)}
			/>
		</div>
	);
};
