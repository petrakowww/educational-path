import { Node } from 'reactflow';
import {
	GraphNodeChecklistProps,
	GraphNodeComponent,
	GraphNodeTodoItem,
} from '@/shared/lib/node/component';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Input } from '@/shared/ui';
import { TrashIcon } from 'lucide-react';
import { GraphNodeChecklistEditor } from '@/shared/lib/node/editor';
import { useAppSelector, useAppDispatch } from '@/shared/managers';
import { setSelectedTodo } from '@/shared/managers/reducers/editor.slice';

interface ComponentEditorChecklistProps {
	editedNode: Node<GraphNodeComponent<GraphNodeChecklistProps>>;
}

export const ComponentCheckList = (props: ComponentEditorChecklistProps) => {
	const { editedNode } = props;

	const [todos, setTodos] = useState<GraphNodeTodoItem[]>(
		editedNode.data.dataTProps.checkListProps.todoItems
	);

	const focusedTodoId = useAppSelector(
		(state) => state.aside_editor.selectedTodoId
	);

	const dispatch = useAppDispatch();

	const clearSelectedTodo = useCallback(() => {
		dispatch(setSelectedTodo(null));
	}, [dispatch]);

	const handleUpdateNode = (
		nodeId: string,
		updateTodos: GraphNodeTodoItem[]
	) => {
		GraphNodeChecklistEditor.updateChecklistItemsArray(updateTodos);
		setTodos(updateTodos);
	};

	const addTodo = () => {
		const newTodo: GraphNodeTodoItem = {
			idItem: crypto.randomUUID(),
			label: '',
			isDone: false,
		};
		handleUpdateNode(editedNode.id, [...todos, newTodo]);
	};

	const updateTodo = (id: string, newData: Partial<GraphNodeTodoItem>) => {
		const updateTodoArray = todos.map((todo) =>
			todo.idItem === id ? { ...todo, ...newData } : todo
		);
		handleUpdateNode(editedNode.id, updateTodoArray);
	};

	const removeTodo = (id: string) => {
		const removedNodeTodoArray = todos.filter((todo) => todo.idItem !== id);
		handleUpdateNode(editedNode.id, removedNodeTodoArray);
	};

	useEffect(() => {
		setTodos(GraphNodeChecklistEditor.getChecklistItemsArray());
	}, [editedNode]);

	return (
		<div className="flex flex-col gap-2">
			<span className="text-foreground/80 text-sm font-medium">
				To-dos
			</span>

			<div className="flex flex-col gap-3">
				{todos.length > 0 ? (
					todos.map((todo) => (
						<TodoItemRow
							key={todo.idItem}
							todo={todo}
							onUpdate={updateTodo}
							onRemove={removeTodo}
							focusedTodoId={focusedTodoId}
							onFocusClear={clearSelectedTodo}
						/>
					))
				) : (
					<span className="text-sm text-foreground/80">
						No to-dos yet
					</span>
				)}
			</div>

			<Button
				onClick={addTodo}
				className="text-sm px-3 py-1 border rounded-md"
				variant={'outline'}
			>
				Add To-do
			</Button>
		</div>
	);
};

interface TodoItemRowProps {
	todo: GraphNodeTodoItem;
	focusedTodoId: string | null;
	onUpdate: (id: string, newData: Partial<GraphNodeTodoItem>) => void;
	onRemove: (id: string) => void;
	onFocusClear: () => void;
}

const TodoItemRow = (props: TodoItemRowProps) => {
	const { todo, focusedTodoId, onUpdate, onRemove, onFocusClear } = props;
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
				variant={'destructive'}
			>
				<TrashIcon className="w-4 h-4" />
			</Button>
		</div>
	);
};
