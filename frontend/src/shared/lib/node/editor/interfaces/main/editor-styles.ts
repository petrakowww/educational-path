import {
	GraphNodeComponent,
	GraphNodeFontProps,
	GraphNodeBlockProps,
	GraphNodeAlignmentTextProps,
} from '../../../component';
import { Node } from 'reactflow';

export interface GraphNodeBaseEditorAllStyles {
	editedNode: Node<
		GraphNodeComponent<
			Partial<
				GraphNodeFontProps &
					GraphNodeBlockProps &
					GraphNodeAlignmentTextProps
			>
		>
	>;
}
