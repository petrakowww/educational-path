import { GraphNodeTitleBaseProps } from '../../interfaces/main/node-title';
import { GraphNodeComponent } from './graph-node-component';
import { initFontSizeComponent } from '../objects/object-font';
import { NodeLabelEnum } from '../../constants/enum-label';

export class TitleNodeComponent extends GraphNodeComponent<GraphNodeTitleBaseProps> {
	constructor() {
		super({
			label: NodeLabelEnum.title,
			fontProps: initFontSizeComponent,
		});
	}
}
