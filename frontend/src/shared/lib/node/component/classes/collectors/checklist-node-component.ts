import {
	initBackgroundColorComponent,
	initBorderColorComponent,
} from '../objects/object-block';
import { GraphNodeChecklistBaseProps } from '../../interfaces/main/node-todo';
import { GraphNodeComponent } from './graph-node-component';
import { initTodoListComponent } from '../objects/object-todo';

export class ChecklistNodeComponent extends GraphNodeComponent<GraphNodeChecklistBaseProps> {
	constructor() {
		super({
			blockProps: {
				...initBackgroundColorComponent,
				...initBorderColorComponent,
			},
			checkListProps: { ...initTodoListComponent },
		});
	}
}
