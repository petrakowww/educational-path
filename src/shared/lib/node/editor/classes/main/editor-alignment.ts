import {
	store,
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
		const editedNode = this.getEditedNode();
		if (!editedNode) return;
		store.dispatch(
			updateNodeTextAlignment({ id: editedNode.id, textAlignment: value })
		);
	}

	static changeVerticalAlignment(value: TextVerticalAlignmentEnum): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;
		store.dispatch(
			updateNodeTextVerticalAlignment({
				id: editedNode.id,
				textVerticalAlignment: value,
			})
		);
	}

	static textAlignmentDefaultValue(): TextAlignmentEnum {
		const editedNode = this.getEditedNode<GraphNodeAlignmentTextProps>();
		return (
			editedNode?.data.dataTProps.textAlignmentProps?.textAlignType ??
			initTextAlignComponent.textAlignType
		);
	}

	static textVerticalAlignmentDefaultValue(): TextVerticalAlignmentEnum {
		const editedNode = this.getEditedNode<GraphNodeAlignmentTextProps>();

		return (
			editedNode?.data.dataTProps.textAlignmentProps
				?.textJustificationType ??
			initTextJustificationComponent.textJustificationType
		);
	}
}
