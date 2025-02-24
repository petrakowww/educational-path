export interface GraphNodeTodoItem {
	label: string;
	idItem: string;
	isDone: boolean;
}

export interface GraphNodeCheckList {
	todoItems: GraphNodeTodoItem[];
}

export interface GraphNodeChecklistProps {
	checkListProps: GraphNodeCheckList;
}

export interface GraphNodeTodo {
	todoItem?: GraphNodeTodoItem;
}

export interface GraphNodeTodoProps {
	todoProps: GraphNodeTodo;
}
