import {
	store,
	updateNodeTextAlignment,
	updateNodeTextVerticalAlignment,
} from '@/shared/managers';
import { GraphNodeBaseEditor } from './editor-base';
import {
	TextAlignmentEnum,
	TextVerticalAlignmentEnum,
} from '../../../component';

export class GraphNodeAlignmentEditor extends GraphNodeBaseEditor {
	static changeAlignment(value: TextAlignmentEnum): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;
		store.dispatch(
			updateNodeTextAlignment({ id: editedNode.id, textAlignment: value })
		);
	}

	static textAlignmentDefaultValue(): TextAlignmentEnum {
		const editedNode = this.editedNode;
		if (!editedNode) return TextAlignmentEnum.Center;

		return (
			editedNode.data.textAlignmentProps?.textAlignType ??
			TextAlignmentEnum.Center
		);
	}

	static changeVerticalAlignment(value: TextVerticalAlignmentEnum): void {
		const editedNode = this.editedNode;
		if (!editedNode) return;
		store.dispatch(
			updateNodeTextVerticalAlignment({
				id: editedNode.id,
				textVerticalAlignment: value,
			})
		);
	}

	static textVerticalAlignmentDefaultValue(): TextVerticalAlignmentEnum {
		const editedNode = this.editedNode;
		if (!editedNode) return TextVerticalAlignmentEnum.Top;

		return (
			editedNode.data.textAlignmentProps?.textVerticalAlignType ??
			TextVerticalAlignmentEnum.Top
		);
	}
}
