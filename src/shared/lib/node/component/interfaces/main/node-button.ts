import { GraphNodeBlockProps } from '../auxiliary/type-block';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';
import { GraphNodeLinkProps } from '../auxiliary/type-link';

export interface GraphNodeButtonBaseProps
    extends GraphNodeLabelProps,
        GraphNodeFontProps, GraphNodeBlockProps, GraphNodeLinkProps {}
