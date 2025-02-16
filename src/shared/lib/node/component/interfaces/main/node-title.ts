import { GraphNodeBlockProps } from "../auxiliary/node-block";
import { GraphNodeFontProps } from "../auxiliary/node-font";
import { GraphNodeLabelProps } from "../auxiliary/node-label";

export interface GraphNodeTitleBaseProps extends GraphNodeLabelProps {
    fontProps: GraphNodeFontProps;
    blockProps: GraphNodeBlockProps;
}