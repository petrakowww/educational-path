import {
	store,
	updateNodeBackground,
	updateNodeBorderRadius,
	updateNodeBorderWidth,
	updateNodeBorderColor,
} from '@/shared/managers';
import {
	GraphNodeBlockProps,
	initBorderRadiusComponent,
	initBorderWidthComponent,
	initBorderColorComponent,
} from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeBlockEditor extends GraphNodeBaseEditor {
	static changeBackgroundColor(color: string): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeBackground({ id: editedNode.id, backgroundColor: color })
		);
	}

	static changeBorderRadius(radius: number): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderRadius({ id: editedNode.id, borderRadius: radius })
		);
	}

	static changeBorderWidth(width: number): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderWidth({ id: editedNode.id, borderWidth: width })
		);
	}

	static changeBorderColor(borderColor: string): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		store.dispatch(
			updateNodeBorderColor({
				id: editedNode.id,
				borderColor: borderColor,
			})
		);
	}

	static backgroundColorDefaultValue(): string {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();

		return editedNode?.data.dataTProps.blockProps?.backgroundColor ?? '';
	}

	static borderRadiusDefaultValue(): number {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();

		return (
			editedNode?.data.dataTProps.blockProps?.borderRadius ??
			initBorderRadiusComponent.borderRadius
		);
	}

	static borderWidthDefaultValue(): number {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();

		return (
			editedNode?.data.dataTProps.blockProps?.borderWidth ??
			initBorderWidthComponent.borderWidth
		);
	}

	static borderColorDefaultValue(): string {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();

		return (
			editedNode?.data.dataTProps.blockProps?.borderColor ??
			initBorderColorComponent.borderColor ??
			''
		);
	}
}
