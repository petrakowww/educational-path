import {
	GraphNodeChecklistProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

export const hasChecklistProps = <
	T extends GraphNodeComponent<GraphNodeChecklistProps>,
>(
	component: Node<T>
): boolean => {
	return 'checkListProps' in component.data.dataTProps;
};
