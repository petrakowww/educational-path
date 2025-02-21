import {
	GraphNodeLegendItem,
	GraphNodeLegendItemExtended,
	GraphNodeLegendProps,
} from '../../../component';
import { initLegendArrayComponent } from '../../../component/classes/objects/object-legend';
import { GraphNodeBaseEditor } from './editor-base';
export class GraphNodeLegendEditor extends GraphNodeBaseEditor {
	static updateLegendItemsArray(value: GraphNodeLegendItem[]): void {
		this.updateProperty('legendProps', 'legendItems', value);
		this.autoSize();
	}

	static getLegentItemsArray(): GraphNodeLegendItem[] {
		return this.getProperty(
			'legendProps',
			'legendItems',
			initLegendArrayComponent.legendItems
		);
	}

	static getAllLegendGroups(): GraphNodeLegendItemExtended[] {
		const legendNodes =
			this.getNodesByProperty<GraphNodeLegendProps>('legendProps');

		return legendNodes.flatMap((node) =>
			node.data.dataTProps.legendProps.legendItems.map((item) => ({
				...item,
				nodeId: node.id,
			}))
		);
	}

	static getTopicInfoByNode(
		legendItems: GraphNodeLegendItem[] | undefined,
		topicId: string | undefined
	): GraphNodeLegendItem | undefined {
		if (!legendItems || !topicId) return undefined;
		return legendItems.find((item) => item.idItem === topicId);
	}
}
