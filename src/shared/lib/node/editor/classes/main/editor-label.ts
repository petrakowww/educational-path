import { updateNodeLabel } from '@/shared/managers';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeLabelEditor extends GraphNodeBaseEditor {
	static renameNode(value: string): void {
		this.dispatchIfEdited(updateNodeLabel, { label: value });
	}
}
