import { GraphNodeComponent, GraphNodeAlignmentTextProps } from "@/shared/lib/node/component";
import { Node } from "reactflow";


export const hasAlignmentProps = <
	T extends GraphNodeComponent<GraphNodeAlignmentTextProps>,
>(
	component: Node<T>
): boolean => {
	return 'textAlignmentProps' in component.data.dataTProps;
};

export const hasHorizontalProps = <
	T extends GraphNodeComponent<GraphNodeAlignmentTextProps>,
>(
	component: Node<T>
): boolean => {
	return 'textAlignType' in component.data.dataTProps.textAlignmentProps;
};

export const hasVerticalProps = <
	T extends GraphNodeComponent<GraphNodeAlignmentTextProps>,
>(
	component: Node<T>
): boolean => {
	return 'textJustificationType' in component.data.dataTProps.textAlignmentProps;
};
