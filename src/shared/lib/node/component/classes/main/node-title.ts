import { NodeLabelEnum } from '../../constants/node-label';
import { GraphNodeBlockProps } from '../../interfaces/auxiliary/node-block';
import { GraphNodeFontProps } from '../../interfaces/auxiliary/node-font';
import { GraphNodeTitleBaseProps } from '../../interfaces/main/node-title';
import { graphNodeAuxiliaryBlock } from '../auxiliary/node-block';
import { graphNodeAuxiliaryFont } from '../auxiliary/node-font';
import { GraphNodeComponent } from './node-base';

export class TitleNodeComponent
	extends GraphNodeComponent
	implements GraphNodeTitleBaseProps
{
	fontProps: GraphNodeFontProps;
	blockProps: GraphNodeBlockProps;
	label?: string;

	constructor() {
		super();
		this.fontProps = graphNodeAuxiliaryFont;
		this.blockProps = graphNodeAuxiliaryBlock;
		this.label = NodeLabelEnum.title;
	}
}
