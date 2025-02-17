import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeContentProps } from '../auxiliary/type-content';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';
import { GraphNodeLinkProps } from '../auxiliary/type-link';
import { GraphNodeProgressProps } from '../auxiliary/type-progress';
import { GraphNodeTimeProps } from '../auxiliary/type-time';

export interface GraphNodeTopicBaseProps
	extends GraphNodeLabelProps,
		GraphNodeFontProps,
		GraphNodeBlockProps {
	linkProps: GraphNodeLinkProps;
	timeProps: GraphNodeTimeProps;
	progressProps: GraphNodeProgressProps;
	contentProps: GraphNodeContentProps;
}
