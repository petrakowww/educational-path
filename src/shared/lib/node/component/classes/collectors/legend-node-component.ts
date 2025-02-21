import { GraphNodeLegendBaseProps } from '../../interfaces/main/node-legend';
import { GraphNodeComponent } from './graph-node-component';
import { getLabelProps } from '../objects/object-label';
import { NodeLabelEnum } from '../../constants/enum-label';
import {
	initFontColorComponent,
	initFontSizeComponent,
} from '../objects/object-font';
import {
	initBackgroundColorComponent,
	initBorderColorComponent,
} from '../objects/object-block';
import { initLegendArrayComponent } from '../objects/object-legend';

export class LegendNodeComponent extends GraphNodeComponent<GraphNodeLegendBaseProps> {
	constructor() {
		super({
			labelProps: getLabelProps(NodeLabelEnum.legend).labelProps,
			fontProps: { ...initFontSizeComponent, ...initFontColorComponent },
			blockProps: {
				...initBackgroundColorComponent,
				...initBorderColorComponent,
			},
			legendProps: { ...initLegendArrayComponent },
		});
	}
}
