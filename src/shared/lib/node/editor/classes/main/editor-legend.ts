import {
	GraphNodeLegendItem,
	GraphNodeLegendTopicProps,
} from '../../../component';
import { initLegendArrayComponent } from '../../../component/classes/objects/object-legend';
import { GraphNodeBaseEditor } from './editor-base';
import { GraphNodeLegendProps } from '../../../component';
import { setSelectedLegend, store } from '@/shared/managers';

export class GraphNodeLegendEditor extends GraphNodeBaseEditor {
	static updateLegendItemsArray(value: GraphNodeLegendItem[]): void {
		this.updateProperty('legendProps', 'legendItems', value);
	}

	static updateOrDeleteLegendSubdcribed(
		updatedLegendItems: GraphNodeLegendItem[],
		oldIdLegendItem: string,
		remove: boolean = false
	) {
		const affectedNodes =
			this.getNodesByProperty<GraphNodeLegendTopicProps>(
				'legendTopicProps'
			);

		affectedNodes.forEach((node) => {
			const currentLegend =
				node.data.dataTProps.legendTopicProps?.topicItem;

			const updateLegendItem = updatedLegendItems.find(
				() => oldIdLegendItem === currentLegend?.idItem
			);

			const mustDoneOperation = oldIdLegendItem === currentLegend?.idItem;

			if (currentLegend && (updateLegendItem || mustDoneOperation)) {
				const updateNode = remove ? undefined : updateLegendItem;
				this.updateProperty(
					'legendTopicProps',
					'topicItem',
					updateNode,
					node
				);
			}
		});
	}

	static deleteLegendComponent(nodeId: string) {
		const node = this.getNode<GraphNodeLegendProps>(nodeId);
		if (!node) return;

		const legendItems = node.data.dataTProps.legendProps?.legendItems ?? [];
		const affectedNodes =
			this.getNodesByProperty<GraphNodeLegendTopicProps>(
				'legendTopicProps'
			);

		affectedNodes.forEach((affectedNode) => {
			const currentLegend =
				affectedNode.data.dataTProps.legendTopicProps?.topicItem;
			const isAffected = legendItems.some(
				(legend) => legend.idItem === currentLegend?.idItem
			);

			if (isAffected) {
				this.updateProperty(
					'legendTopicProps',
					'topicItem',
					undefined,
					affectedNode
				);
			}
		});
	}

	static getLegendItemsArray(): GraphNodeLegendItem[] {
		return this.getProperty(
			'legendProps',
			'legendItems',
			initLegendArrayComponent.legendItems
		);
	}

	static getAllLegendGroups(): GraphNodeLegendItem[] {
		const legendNodes =
			this.getNodesByProperty<GraphNodeLegendProps>('legendProps');

		return legendNodes.flatMap(
			(node) => node.data.dataTProps.legendProps.legendItems
		);
	}

	static setLegendFocusOnEditorItem(idItem: string) {
		store.dispatch(setSelectedLegend(idItem));
	}
}
