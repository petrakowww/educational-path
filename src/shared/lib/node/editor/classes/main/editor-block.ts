import {
	updateNodeBackground,
	updateNodeBorderRadius,
	updateNodeBorderWidth,
	updateNodeBorderColor,
	updateNodePadding,
} from '@/shared/managers';
import {
	GraphNodeBlockProps,
	initBorderRadiusComponent,
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

	static changeBorderWidth(width: number | undefined): void {
		this.dispatchIfEdited(updateNodeBorderWidth, { borderWidth: width });
	}

	static changeBorderColor(borderColor: string | undefined): void {
		this.dispatchIfEdited(updateNodeBorderColor, { borderColor });
	}

	static changePadding(padding: number | undefined): void {
		this.dispatchIfEdited(updateNodePadding, { padding });
		this.autoSize();
	}

	static backgroundColorValue(): string | undefined {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return editedNode?.data.dataTProps.blockProps?.backgroundColor;
	}

	static paddingValue(): number | undefined {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return editedNode?.data.dataTProps.blockProps?.padding;
	}

	static borderRadiusValue(): number {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return (
			editedNode?.data.dataTProps.blockProps?.borderRadius ??
			initBorderRadiusComponent.borderRadius
		);
	}

	static borderWidthValue(): number | undefined {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return editedNode?.data.dataTProps.blockProps?.borderWidth;
	}

	static borderColorValue(): string | undefined {
		const editedNode = this.getEditedNode<GraphNodeBlockProps>();
		return (
			editedNode?.data.dataTProps.blockProps?.borderColor ??
			initBorderColorComponent.borderColor
		);
	}
}
