import { Node } from 'reactflow';
import { useEffect, useRef } from 'react';
import { Button, Input } from '@/shared/ui';
import { TrashIcon } from 'lucide-react';
import { ToDo, ToDos } from '@/features/node/editor/types/extended-node';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { NodeDataShapeChecklist } from '@/features/node/editor/types/node';

interface ComponentEditorChecklistProps {
	editedNode: Node<{ todoProps: { todos: ToDos } }>;
}

export const ComponentCheckList = ({
	editedNode,
}: ComponentEditorChecklistProps) => {
	const { updateNodeProperties } = useNodeStore();

	const { selectedTodoId, setSelectedTodo } = useEditorAsideStore();

	const todos = editedNode.data.todoProps?.todos ?? [];

	const clearSelectedTodo = () => {
		setSelectedTodo(null);
	};

	const handleTodosUpdate = (updatedTodos: ToDos) => {
		updateNodeProperties<NodeDataShapeChecklist>({
			nodeId: editedNode.id,
			properties: {
				...editedNode.data,
				data: {
					checklistProps: { todos: updatedTodos },
				},
			},
		});
	};

	const addTodo = () => {
		const newTodo: ToDo = {
			idItem: crypto.randomUUID(),
			label: '',
			isDone: false,
		};
		handleTodosUpdate([...todos, newTodo]);
	};

	const updateTodo = (id: string, newData: Partial<ToDo>) => {
		const updatedTodos = todos.map((todo) =>
			todo.idItem === id ? { ...todo, ...newData } : todo
		);
		handleTodosUpdate(updatedTodos);
	};

	const removeTodo = (id: string) => {
		const updatedTodos = todos.filter((todo) => todo.idItem !== id);
		handleTodosUpdate(updatedTodos);
	};

	return (
		<div className="flex flex-col gap-2">
			<span className="text-foreground/80 text-sm font-medium">
				Задачи
			</span>

			<div className="flex flex-col gap-3">
				{todos.length > 0 ? (
					todos.map((todo) => (
						<TodoItemRow
							key={todo.idItem}
							todo={todo}
							focusedTodoId={selectedTodoId}
							onUpdate={updateTodo}
							onRemove={removeTodo}
							onFocusClear={clearSelectedTodo}
						/>
					))
				) : (
					<span className="text-sm text-foreground/80">
						Задач ещё нету
					</span>
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
	todo: ToDo;
	focusedTodoId: string | null;
	onUpdate: (id: string, newData: Partial<ToDo>) => void;
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
		if (todo.idItem === focusedTodoId) {
			inputRef.current?.focus();
			inputRef.current?.select();
			onFocusClear();
		}
	}, [focusedTodoId, todo.idItem, onFocusClear]);

	return (
		<div className="flex items-center gap-2">
			<Input
				ref={inputRef}
				className="h-6 px-1.5 text-sm w-full"
				type="text"
				placeholder="Todo label"
				value={todo.label}
				onChange={(e) =>
					onUpdate(todo.idItem, { label: e.target.value })
				}
			/>

			<Button
				onClick={() => onRemove(todo.idItem)}
				className="w-6 h-6 p-0 aspect-square flex items-center justify-center"
				variant="destructive"
			>
				<TrashIcon className="w-4 h-4" />
			</Button>
		</div>
	);
};
