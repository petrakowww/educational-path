import { GraphNodeAlignmentTextProps } from '../auxiliary/type-alignment';
import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';

export interface GraphNodeParagraphBaseProps
	extends GraphNodeLabelProps,
		GraphNodeFontProps,
		GraphNodeBlockProps,
		GraphNodeAlignmentTextProps {}
