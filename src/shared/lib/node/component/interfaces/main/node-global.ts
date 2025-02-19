import { GraphNodeTitleBaseProps } from './node-title';
import { GraphNodeTopicBaseProps } from './node-topic';

export type GlobalNodeDataProps =
	| GraphNodeTopicBaseProps
	| GraphNodeTitleBaseProps;
