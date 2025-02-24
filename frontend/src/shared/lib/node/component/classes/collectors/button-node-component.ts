import { GraphNodeComponent } from './graph-node-component';
import {
	initFontColorComponent,
	initFontSizeComponent,
} from '../objects/object-font';
import { NodeLabelEnum } from '../../constants/enum-label';
import { getLabelProps } from '../objects/object-label';
import { GraphNodeButtonBaseProps } from '../../interfaces/main/node-button';
import {
	initBackgroundColorComponent,
	initBorderColorComponent,
	initBorderRadiusComponent,
	initBorderWidthComponent,
} from '../objects/object-block';
import { initUrlAddressComponent } from '../objects/object-link';

export class ButtonNodeComponent extends GraphNodeComponent<GraphNodeButtonBaseProps> {
	constructor() {
		super({
			labelProps: getLabelProps(NodeLabelEnum.button).labelProps,
			blockProps: {
				...initBorderColorComponent,
				...initBorderRadiusComponent,
				...initBackgroundColorComponent,
				...initBorderWidthComponent,
			},
			fontProps: {
				...initFontSizeComponent,
				...initFontColorComponent,
			},
			linkProps: {
				...initUrlAddressComponent,
			},
		});
	}
}
