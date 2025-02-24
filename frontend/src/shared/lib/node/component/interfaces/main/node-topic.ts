import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';
import { GraphNodeLegendTopicProps } from '../auxiliary/type-legend';

export interface GraphNodeTopicBaseProps
	extends GraphNodeLabelProps,
		GraphNodeFontProps,
		GraphNodeBlockProps,
		GraphNodeLabelProps, GraphNodeLegendTopicProps {}
