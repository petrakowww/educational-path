import {
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
		this.dispatchIfEdited(updateNodeBackground, { backgroundColor: color });
	}

	static changeBorderRadius(radius: number): void {
		this.dispatchIfEdited(updateNodeBorderRadius, { borderRadius: radius });
	}

	static changeBorderWidth(width: number): void {
		this.dispatchIfEdited(updateNodeBorderWidth, { borderWidth: width });
	}

	static changeBorderColor(borderColor: string): void {
		this.dispatchIfEdited(updateNodeBorderColor, { borderColor });
	}

	static backgroundColorValue(): string {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return editedNode?.data.dataTProps.blockProps?.backgroundColor ?? '';
	}

	static borderRadiusValue(): number {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return (
			editedNode?.data.dataTProps.blockProps?.borderRadius ??
			initBorderRadiusComponent.borderRadius
		);
	}

	static borderWidthValue(): number {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return (
			editedNode?.data.dataTProps.blockProps?.borderWidth ??
			initBorderWidthComponent.borderWidth
		);
	}

	static borderColorValue(): string {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return (
			editedNode?.data.dataTProps.blockProps?.borderColor ??
			initBorderColorComponent.borderColor ??
			''
		);
	}
}
