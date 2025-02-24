import {
	GraphNodeComponent,
	GraphNodeLabelProps,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export const hasLabelProps = <
	T extends GraphNodeComponent<GraphNodeLabelProps>,
>(
	component: Node<T>
): boolean => {
	return 'labelProps' in component.data.dataTProps;
};

export const hasLabelContentProps = <
	T extends GraphNodeComponent<GraphNodeLabelProps>,
>(
	component: Node<T>
): boolean => {
	return 'label' in component.data.dataTProps.labelProps;
};
