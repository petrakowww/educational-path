import { GraphNodeBlockProps } from "../auxiliary/type-block";
import { GraphNodeFontProps } from "../auxiliary/type-font";
import { GraphNodeLabelProps } from "../auxiliary/type-label";
import { GraphNodeLegendProps } from "../auxiliary/type-legend";

export interface GraphNodeLegendBaseProps
    extends GraphNodeLabelProps,
        GraphNodeFontProps,
        GraphNodeBlockProps, GraphNodeLegendProps {}