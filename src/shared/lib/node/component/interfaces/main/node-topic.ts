import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';

export interface GraphNodeTopicBaseProps
	extends GraphNodeLabelProps,
		GraphNodeFontProps,
		GraphNodeBlockProps,
		GraphNodeLabelProps {}
