import { NodeLabelEnum } from '../../constants/enum-label';
import { GraphNodeTopicBaseProps } from '../../interfaces/main/node-topic';
import { initBackgroundColorComponent } from '../objects/object-block';
import { graphNodeAuxiliaryContent } from '../objects/object-content';
import { initFontSizeComponent } from '../objects/object-font';
import { graphNodeAuxiliaryLink } from '../objects/object-link';
import { graphNodeAuxiliaryProgress } from '../objects/object-progress';
import { graphNodeAuxiliaryTime } from '../objects/object-time';
import { GraphNodeComponent } from './graph-node-component';

export class TopicNodeComponent extends GraphNodeComponent<GraphNodeTopicBaseProps> {
	constructor() {
		super({
			contentProps: graphNodeAuxiliaryContent,
			timeProps: graphNodeAuxiliaryTime,
			progressProps: graphNodeAuxiliaryProgress,
			linkProps: graphNodeAuxiliaryLink,
			fontProps: initFontSizeComponent,
			blockProps: initBackgroundColorComponent,
			label: NodeLabelEnum.topic,
		});
	}
}

export class SubTopicNodeComponent extends TopicNodeComponent {
	constructor() {
		super();
		this.dataTProps.label = NodeLabelEnum.subtopic;
	}
}
