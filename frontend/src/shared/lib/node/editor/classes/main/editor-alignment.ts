import {
	TextAlignmentEnum,
	TextVerticalAlignmentEnum,
} from '../../../component';
import {
	initTextAlignComponent,
	initTextJustificationComponent,
} from '../../../component/classes/objects/object-alignment';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeAlignmentEditor extends GraphNodeBaseEditor {
	static changeAlignment(value: TextAlignmentEnum): void {
		this.updateProperty('textAlignmentProps', 'textAlignType', value);
	}

	static changeVerticalAlignment(value: TextVerticalAlignmentEnum): void {
		this.updateProperty(
			'textAlignmentProps',
			'textJustificationType',
			value
		);
	}

	static textAlignmentValue(): TextAlignmentEnum {
		return this.getProperty(
			'textAlignmentProps',
			'textAlignType',
			initTextAlignComponent.textAlignType
		);
	}

	static textVerticalAlignmentValue(): TextVerticalAlignmentEnum {
		return this.getProperty(
			'textAlignmentProps',
			'textJustificationType',
			initTextJustificationComponent.textJustificationType
		);
	}
}
