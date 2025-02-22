import { GraphNodeBlockProps } from '../auxiliary/type-block';
import {
	GraphNodeChecklistProps,
	GraphNodeTodoProps,
} from '../auxiliary/type-checklist';
import { GraphNodeFontProps } from '../auxiliary/type-font';
import { GraphNodeLabelProps } from '../auxiliary/type-label';

export interface GraphNodeChecklistBaseProps
	extends GraphNodeBlockProps,
		GraphNodeChecklistProps {}

export interface GraphNodeTodoBaseProps
	extends GraphNodeFontProps,
		GraphNodeBlockProps,
		GraphNodeTodoProps,
		GraphNodeLabelProps {}
