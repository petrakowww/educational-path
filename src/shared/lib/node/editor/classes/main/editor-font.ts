import {
	store,
	updateNodeFontColor,
	updateNodeFontSize,
	updateNodeFontWeight,
} from '@/shared/managers';
import { GraphNodeBaseEditor } from './editor-base';
import { GraphNodeFontProps } from '@/shared/lib/node/component';
import {
	initFontSizeComponent,
	initFontWeightComponent,
	initFontColorComponent,
} from '@/shared/lib/node/component';

export class GraphNodeFontEditor extends GraphNodeBaseEditor {
	static resizeNodeValue(size: number): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontSize({ id: editedNode.id, fontSize: size })
		);
	}

	static changeTextColor(color: string): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontColor({ id: editedNode.id, textColor: color })
		);
	}

	static changeTextWeight(weight: number): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontWeight({ id: editedNode.id, fontWeight: weight })
		);
	}

	static sizeDefaultValue(): number {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();

		return (
			editedNode?.data.dataTProps.fontProps?.fontSize ??
			initFontSizeComponent.fontSize
		);
	}

	static colorDefaultValue(): string {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();

		return (
			editedNode?.data.dataTProps.fontProps?.fontColor ??
			initFontColorComponent.fontColor ??
			''
		);
	}

	static weightDefaultValue(): number {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();

		return (
			editedNode?.data.dataTProps.fontProps?.fontWeight ??
			initFontWeightComponent.fontWeight
		);
	}
}
