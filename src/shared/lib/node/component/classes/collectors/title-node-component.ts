import { GraphNodeTitleBaseProps } from '../../interfaces/main/node-title';
import { GraphNodeComponent } from './graph-node-component';
import { initFontSizeComponent } from '../objects/object-font';
import { NodeLabelEnum } from '../../constants/enum-label';
import { getLabelProps } from '../objects/object-label';

export class TitleNodeComponent extends GraphNodeComponent<GraphNodeTitleBaseProps> {
	constructor() {
		super({
			labelProps: getLabelProps(NodeLabelEnum.title).labelProps,
			fontProps: {...initFontSizeComponent},
		});
	}
}
