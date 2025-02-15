import { NodeBorderRadiusEnum } from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';
import {
	store,
	updateNodeBackground,
	updateNodeBorderColor,
	updateNodeBorderRadius,
	updateNodeBorderWidth,
} from '@/shared/managers';

export class GraphNodeBlockEditor extends GraphNodeBaseEditor {
	static changeBackgroundColor(color: string): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeBackground({ id: editedNode.id, backgroundColor: color })
		);
	}

	static backgroundColorDefaultValue(): string {
		const editedNode = this.editedNode;
		if (!editedNode) return '';

		return editedNode.data.blockProps?.backgroundColor || '';
	}

	static changeBorderRadius(radius: number): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderRadius({ id: editedNode.id, borderRadius: radius })
		);
	}

	static changeBorderWidth(width: number): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderWidth({ id: editedNode.id, borderWidth: width })
		);
	}

	static changeBorderColor(borderColor: string): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderColor({
				id: editedNode.id,
				borderColor: borderColor,
			})
		);
	}

	static borderRadiusDefaultValue(): number {
		const editedNode = this.editedNode;
		if (!editedNode) return 0;

		return (
			editedNode.data.blockProps?.borderRadius ?? NodeBorderRadiusEnum.MD
		);
	}

	static borderWidthDefaultValue(): number {
		const editedNode = this.editedNode;
		if (!editedNode) return 0;

		return editedNode.data.blockProps?.borderWidth ?? 1;
	}

	static borderColorDefaultValue(): string {
		const editedNode = this.editedNode;
		if (!editedNode) return '';

		return editedNode.data.blockProps?.borderColor ?? '';
	}
}
