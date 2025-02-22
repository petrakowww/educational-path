import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeLabelEditor extends GraphNodeBaseEditor {
	static changeNameNode(value: string): void {
		this.updateProperty('labelProps', 'label', value);
		this.autoSize();
	}
}
