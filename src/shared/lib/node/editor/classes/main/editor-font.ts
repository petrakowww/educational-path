import {
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
		this.dispatchIfEdited(updateNodeFontSize, { fontSize: size });
	}

	static changeTextColor(color: string): void {
		this.dispatchIfEdited(updateNodeFontColor, { textColor: color });
	}

	static changeTextWeight(weight: number): void {
		this.dispatchIfEdited(updateNodeFontWeight, { fontWeight: weight });
	}

	static sizeValue(): number {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();
		return (
			editedNode?.data.dataTProps.fontProps?.fontSize ??
			initFontSizeComponent.fontSize
		);
	}

	static colorValue(): string {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();
		return (
			editedNode?.data.dataTProps.fontProps?.fontColor ??
			initFontColorComponent.fontColor ??
			''
		);
	}

	static weightValue(): number {
		const editedNode = this.getEditedNode<GraphNodeFontProps>();
		return (
			editedNode?.data.dataTProps.fontProps?.fontWeight ??
			initFontWeightComponent.fontWeight
		);
	}
}
