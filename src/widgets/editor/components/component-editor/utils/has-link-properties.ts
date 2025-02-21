import {
	GraphNodeComponent,
	GraphNodeLinkProps,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export const hasLinkProps = <T extends GraphNodeComponent<GraphNodeLinkProps>>(
	component: Node<T>
): boolean => {
	return 'linkProps' in component.data.dataTProps;
};

export const hasBaseUrlProps = <
	T extends GraphNodeComponent<GraphNodeLinkProps>,
>(
	component: Node<T>
): boolean => {
	return 'url' in component.data.dataTProps.linkProps;
};
