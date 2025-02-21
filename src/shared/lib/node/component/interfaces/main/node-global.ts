import { GraphNodeAlignmentTextProps } from '../auxiliary/type-alignment';
import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';
import {
	GraphNodeLegendProps,
	GraphNodeLegendTopicProps,
} from '../auxiliary/type-legend';
import { GraphNodeLinkProps } from '../auxiliary/type-link';

export type GraphNodeProps = GraphNodeBlockProps &
	GraphNodeFontProps &
	GraphNodeAlignmentTextProps &
	GraphNodeLabelProps &
	GraphNodeLinkProps &
	GraphNodeLegendProps &
	GraphNodeLegendTopicProps;
