import { GraphNodeTodoItem, initTodoListComponent } from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';
import { setSelectedTodo } from '@/shared/managers/reducers/node-aside-slice';
import { store } from '@/shared/managers';

export class GraphNodeChecklistEditor extends GraphNodeBaseEditor {
	static updateChecklistItemsArray(value: GraphNodeTodoItem[]): void {
		this.updateProperty('checkListProps', 'todoItems', value);
	}

	static getChecklistItemsArray(): GraphNodeTodoItem[] {
		return this.getProperty(
			'checkListProps',
			'todoItems',
			initTodoListComponent.todoItems
		);
	}

	static setTodoFocusOnEditorItem(idItem: string) {
		store.dispatch(setSelectedTodo(idItem));
	}
}
