import { NodeLabelEnum } from '../../constants/enum-label';
import { GraphNodeTopicBaseProps } from '../../interfaces/main/node-topic';
import { initBackgroundColorComponent } from '../objects/object-block';
import { initFontSizeComponent } from '../objects/object-font';
import { getLabelProps } from '../objects/object-label';
import { GraphNodeComponent } from './graph-node-component';

export class TopicNodeComponent extends GraphNodeComponent<GraphNodeTopicBaseProps> {
	constructor() {
		super({
			fontProps: initFontSizeComponent,
			blockProps: initBackgroundColorComponent,
			labelProps: getLabelProps(NodeLabelEnum.topic).labelProps,
		});
	}
}

export class SubTopicNodeComponent extends TopicNodeComponent {
	constructor() {
		super();
		this.dataTProps.labelProps = getLabelProps(NodeLabelEnum.subtopic).labelProps;
	}
}
