import { NodeLabelEnum } from '../../constants/node-label';
import { GraphNodeBlockProps } from '../../interfaces/auxiliary/node-block';
import { GraphNodeContentProps } from '../../interfaces/auxiliary/node-content';
import { GraphNodeFontProps } from '../../interfaces/auxiliary/node-font';
import { GraphNodeLinkProps } from '../../interfaces/auxiliary/node-link';
import { GraphNodeProgressProps } from '../../interfaces/auxiliary/node-progress';
import { GraphNodeTimeProps } from '../../interfaces/auxiliary/node-time';
import { GraphNodeTopicBaseProps } from '../../interfaces/main/node-topic';
import { graphNodeAuxiliaryBlock } from '../auxiliary/node-block';
import { graphNodeAuxiliaryContent } from '../auxiliary/node-content';
import { graphNodeAuxiliaryFont } from '../auxiliary/node-font';
import { graphNodeAuxiliaryLink } from '../auxiliary/node-link';
import { graphNodeAuxiliaryProgress } from '../auxiliary/node-progress';
import { graphNodeAuxiliaryTime } from '../auxiliary/node-time';
import { GraphNodeComponent } from './node-base';

export class TopicNodeComponent
	extends GraphNodeComponent
	implements GraphNodeTopicBaseProps
{
	linkProps: GraphNodeLinkProps;
	timeProps: GraphNodeTimeProps;
	progressProps: GraphNodeProgressProps;
	contentProps: GraphNodeContentProps;
	fontProps: GraphNodeFontProps;
	blockProps: GraphNodeBlockProps;
	label?: string;

	constructor() {
		super();
		this.linkProps = graphNodeAuxiliaryLink;
		this.progressProps = graphNodeAuxiliaryProgress;
		this.contentProps = graphNodeAuxiliaryContent;
		this.timeProps = graphNodeAuxiliaryTime;
		this.fontProps = graphNodeAuxiliaryFont;
		this.blockProps = graphNodeAuxiliaryBlock;
		this.label = NodeLabelEnum.topic;
	}
}

export class SubTopicNodeComponent extends TopicNodeComponent {
	constructor() {
		super();
		this.label = NodeLabelEnum.subtopic;
	}
}
