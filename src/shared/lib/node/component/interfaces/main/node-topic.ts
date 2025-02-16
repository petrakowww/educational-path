import { GraphNodeAlignmentTextProps } from '../auxiliary/node-alignment';
import { GraphNodeBlockProps } from '../auxiliary/node-block';
import { GraphNodeContentProps } from '../auxiliary/node-content';
import { GraphNodeFontProps } from '../auxiliary/node-font';
import { GraphNodeLabelProps } from '../auxiliary/node-label';
import { GraphNodeLinkProps } from '../auxiliary/node-link';
import { GraphNodeProgressProps } from '../auxiliary/node-progress';
import { GraphNodeTimeProps } from '../auxiliary/node-time';

export interface GraphNodeTopicBaseProps extends GraphNodeLabelProps {
	linkProps: GraphNodeLinkProps;
	timeProps: GraphNodeTimeProps;
	progressProps: GraphNodeProgressProps;
	contentProps: GraphNodeContentProps;
	fontProps: GraphNodeFontProps;
	blockProps: GraphNodeBlockProps;
	textAlignmentProps: GraphNodeAlignmentTextProps;
}