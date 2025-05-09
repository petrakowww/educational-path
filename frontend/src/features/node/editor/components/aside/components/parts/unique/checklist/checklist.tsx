import { Node } from 'reactflow';
import { useEffect, useRef, useState } from 'react';
import { Button, Input } from '@/shared/ui';
import { TrashIcon } from 'lucide-react';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';
import { WithChecklistTodosCommand } from './utils';
import { ChecklistItem } from '@/shared/graphql/generated/output';

interface ComponentEditorChecklistProps {
	node: Node<NodeDataShapeChecklist>;
}

export const ComponentCheckList = ({ node }: ComponentEditorChecklistProps) => {
	const { selectedTodoId, setSelectedTodo } = useEditorAsideStore();
	const [todos, setTodos] = useState<ChecklistItem[]>(node.data.todos ?? []);
	const topicNodeId = node.id;

	const runUpdateCommand = (newTodos: ChecklistItem[]) => {
		const cmd = new WithChecklistTodosCommand(topicNodeId, newTodos);
		cmd.execute();
		setTodos(newTodos);
	};

	const addTodo = () => {
		const newTodo: ChecklistItem = {
			id: crypto.randomUUID(),
			text: '',
			topicNodeId,
		};
		runUpdateCommand([...todos, newTodo]);
	};

	const updateTodo = (id: string, changes: Partial<ChecklistItem>) => {
		const updated = todos.map((todo) =>
			todo.id === id ? { ...todo, ...changes } : todo
		);
		runUpdateCommand(updated);
	};

	const removeTodo = (id: string) => {
		const filtered = todos.filter((todo) => todo.id !== id);
		runUpdateCommand(filtered);
	};

	const clearSelectedTodo = () => setSelectedTodo(null);

	useEffect(() => {
		setTodos(node.data.todos ?? []);
	}, [node]);

	return (
		<div className="flex flex-col gap-2">
			<span className="text-foreground/80 text-sm font-medium">Задачи</span>

			<div className="flex flex-col gap-3">
				{todos.length > 0 ? (
					todos.map((todo) => (
						<TodoItemRow
							key={todo.id}
							todo={todo}
							focusedTodoId={selectedTodoId}
							onUpdate={updateTodo}
							onRemove={removeTodo}
							onFocusClear={clearSelectedTodo}
						/>
					))
				) : (
					<span className="text-sm text-foreground/80">Задач ещё нету</span>
				)}
			</div>

			<Button
				onClick={addTodo}
				className="text-sm px-3 py-1 border rounded-md"
				variant="outline"
			>
				Добавить задачу
			</Button>
		</div>
	);
};

interface TodoItemRowProps {
	todo: ChecklistItem;
	focusedTodoId: string | null;
	onUpdate: (id: string, newData: Partial<ChecklistItem>) => void;
	onRemove: (id: string) => void;
	onFocusClear: () => void;
}

const TodoItemRow = ({
	todo,
	focusedTodoId,
	onUpdate,
	onRemove,
	onFocusClear,
}: TodoItemRowProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (todo.id === focusedTodoId) {
			inputRef.current?.focus();
			inputRef.current?.select();
			onFocusClear();
		}
	}, [focusedTodoId, todo.id, onFocusClear]);

	return (
		<div className="flex items-center gap-2">
			<Input
				ref={inputRef}
				className="h-6 px-1.5 text-sm w-full"
				type="text"
				placeholder="Задача"
				value={todo.text}
				onChange={(e) => onUpdate(todo.id, { text: e.target.value })}
			/>

			<Button
				onClick={() => onRemove(todo.id)}
				className="w-6 h-6 p-0 aspect-square flex items-center justify-center"
				variant="destructive"
			>
				<TrashIcon className="w-4 h-4" />
			</Button>
		</div>
	);
};
