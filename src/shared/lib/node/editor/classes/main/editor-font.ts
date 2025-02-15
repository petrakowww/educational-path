import {
	store,
	updateNodeFontColor,
	updateNodeFontSize,
	updateNodeFontWeight,
} from '@/shared/managers';
import { GraphNodeBaseEditor } from './editor-base';
import { TextFontWeightEnum } from '../../../component';

export class GraphNodeFontEditor extends GraphNodeBaseEditor {
	static resizeNodeValue(size: number): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontSize({ id: editedNode.id, fontSize: size })
		);
	}

	static sizeDefaultValue(): number {
		const editedNode = this.editedNode;
		if (!editedNode) return 0;

		return editedNode.data.fontProps?.fontSize || 0;
	}

	static changeTextColor(color: string): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontColor({ id: editedNode.id, textColor: color })
		);
	}

	static colorDefaultValue(): string {
		const editedNode = this.editedNode;
		if (!editedNode) return '';

		return editedNode.data.fontProps?.textColor || '';
	}

	static changeTextWeight(weight: number): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeFontWeight({ id: editedNode.id, fontWeight: weight })
		);
	}

	static weightDefaultValue(): number {
		const editedNode = this.editedNode;
		if (!editedNode) return TextFontWeightEnum.Regular;

		return (
			editedNode.data.fontProps?.fontWeight || TextFontWeightEnum.Regular
		);
	}
}
