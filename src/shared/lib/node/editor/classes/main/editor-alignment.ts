import {
	updateNodeTextAlignment,
	updateNodeTextVerticalAlignment,
} from '@/shared/managers';
import {
	TextAlignmentEnum,
	TextVerticalAlignmentEnum,
	GraphNodeAlignmentTextProps,
} from '../../../component';
import {
	initTextAlignComponent,
	initTextJustificationComponent,
} from '../../../component/classes/objects/object-alignment';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeAlignmentEditor extends GraphNodeBaseEditor {
	static changeAlignment(value: TextAlignmentEnum): void {
		this.dispatchIfEdited(updateNodeTextAlignment, {
			textAlignment: value,
		});
	}

	static changeVerticalAlignment(value: TextVerticalAlignmentEnum): void {
		this.dispatchIfEdited(updateNodeTextVerticalAlignment, {
			textVerticalAlignment: value,
		});
	}

	static textAlignmentValue(): TextAlignmentEnum {
		const editedNode = this.getEditedNode<GraphNodeAlignmentTextProps>();
		return (
			editedNode?.data.dataTProps.textAlignmentProps?.textAlignType ??
			initTextAlignComponent.textAlignType
		);
	}

	static textVerticalAlignmentValue(): TextVerticalAlignmentEnum {
		const editedNode = this.getEditedNode<GraphNodeAlignmentTextProps>();
		return (
			editedNode?.data.dataTProps.textAlignmentProps
				?.textJustificationType ??
			initTextJustificationComponent.textJustificationType
		);
	}
}
