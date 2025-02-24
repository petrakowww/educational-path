import {
	initBackgroundColorComponent,
	initBorderColorComponent,
	initPaddingComponent,
} from '../objects/object-block';
import { GraphNodeTodoBaseProps } from '../../interfaces/main/node-todo';
import { GraphNodeComponent } from './graph-node-component';
import { initTodoComponent } from '../objects/object-todo';
import {
	initFontColorComponent,
	initFontSizeComponent,
} from '../objects/object-font';
import { getLabelProps } from '../objects/object-label';
import { NodeLabelEnum } from '../../constants/enum-label';

export class TodoNodeComponent extends GraphNodeComponent<GraphNodeTodoBaseProps> {
	constructor() {
		super({
			blockProps: {
				...initPaddingComponent,
				...initBackgroundColorComponent,
				...initBorderColorComponent,
			},
			fontProps: { ...initFontSizeComponent, ...initFontColorComponent },
			todoProps: { ...initTodoComponent },
			labelProps: getLabelProps(NodeLabelEnum.todo).labelProps,
		});
	}
}
