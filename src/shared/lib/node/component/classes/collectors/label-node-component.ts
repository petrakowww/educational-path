import { GraphNodeTitleBaseProps } from '../../interfaces/main/node-title';
import { GraphNodeComponent } from './graph-node-component';
import {
	initFontColorComponent,
	initFontSizeComponent,
} from '../objects/object-font';
import { NodeLabelEnum } from '../../constants/enum-label';
import { getLabelProps } from '../objects/object-label';

export class LabelNodeComponent extends GraphNodeComponent<GraphNodeTitleBaseProps> {
	constructor() {
		super({
			labelProps: getLabelProps(NodeLabelEnum.label).labelProps,
			fontProps: { ...initFontSizeComponent, ...initFontColorComponent },
		});
	}
}
