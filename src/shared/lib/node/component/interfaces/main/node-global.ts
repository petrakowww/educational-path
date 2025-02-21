import { GraphNodeAlignmentTextProps } from '../auxiliary/type-alignment';
import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';
import { GraphNodeLinkProps } from '../auxiliary/type-link';
import { GraphNodeTitleBaseProps } from './node-title';
import { GraphNodeTopicBaseProps } from './node-topic';

export type GlobalNodeDataProps =
	| GraphNodeTopicBaseProps
	| GraphNodeTitleBaseProps;

export type GraphNodeProps = GraphNodeBlockProps &
	GraphNodeFontProps &
	GraphNodeAlignmentTextProps &
	GraphNodeLabelProps &
	GraphNodeLinkProps;
