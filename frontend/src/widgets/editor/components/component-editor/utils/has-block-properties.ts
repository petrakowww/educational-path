import {
	GraphNodeComponent,
	GraphNodeBlockProps,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export const hasBlockProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'blockProps' in component.data.dataTProps;
};

export const hasBlockBackgroundColorProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'backgroundColor' in component.data.dataTProps.blockProps;
};

export const hasBlockBorderColorProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'borderColor' in component.data.dataTProps.blockProps;
};

export const hasBlockBorderWidthProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'borderWidth' in component.data.dataTProps.blockProps;
};

export const hasBlockBorderRadiusProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'borderRadius' in component.data.dataTProps.blockProps;
};

export const hasBlockPaddingProps = <
	T extends GraphNodeComponent<GraphNodeBlockProps>,
>(
	component: Node<T>
): boolean => {
	return 'padding' in component.data.dataTProps.blockProps;
};
