import {
	GraphNodeComponent,
	GraphNodeFontProps,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export const hasFontProps = <T extends GraphNodeComponent<GraphNodeFontProps>>(
	component: Node<T>
): boolean => {
	return 'fontProps' in component.data.dataTProps;
};

export const hasFontColorProps = <
	T extends GraphNodeComponent<GraphNodeFontProps>,
>(
	component: Node<T>
): boolean => {
	return 'fontColor' in component.data.dataTProps.fontProps;
};

export const hasFontSizeProps = <
	T extends GraphNodeComponent<GraphNodeFontProps>,
>(
	component: Node<T>
): boolean => {
	return 'fontSize' in component.data.dataTProps.fontProps;
};

export const hasFontWeightProps = <
	T extends GraphNodeComponent<GraphNodeFontProps>,
>(
	component: Node<T>
): boolean => {
	return 'fontWeight' in component.data.dataTProps.fontProps;
};
