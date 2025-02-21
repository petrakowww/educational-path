import { GraphNodeComponent } from './graph-node-component';
import { graphNodeAuxiliaryFont } from '../objects/object-font';
import { NodeLabelEnum } from '../../constants/enum-label';
import { GraphNodeParagraphBaseProps } from '../../interfaces/main/node-paragraph';
import { graphNodeAuxiliaryBlock } from '../objects/object-block';
import { graphNodeAuxiliaryAlignment } from '../objects/object-alignment';
import { getLabelProps } from '../objects/object-label';

export class ParagraphNodeComponent extends GraphNodeComponent<GraphNodeParagraphBaseProps> {
	constructor() {
		super({
			labelProps: getLabelProps(NodeLabelEnum.paragraph).labelProps,
			fontProps: graphNodeAuxiliaryFont.fontProps,
			blockProps: graphNodeAuxiliaryBlock.blockProps,
			textAlignmentProps: graphNodeAuxiliaryAlignment.textAlignmentProps,
		});
	}
}
