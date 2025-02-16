import { GraphNodeComponent } from '@/shared/lib/node/component';
import { Node } from 'reactflow';


export const hasContentProps = <T extends GraphNodeComponent>(
	component: Node<T>
): boolean => {
	return 'contentProps' in component.data;
};

export const hasFontProps = <T extends GraphNodeComponent>(
	component: Node<T>
): boolean => {
	return 'fontProps' in component.data;
};

export const hasBlockProps = <T extends GraphNodeComponent>(
	component: Node<T>
): boolean => {
	return 'blockProps' in component.data;
};

export const hasAlignmentTextProps = <T extends GraphNodeComponent>(
	component: Node<T>
): boolean => {
	return 'textAlignmentProps' in component.data;
};