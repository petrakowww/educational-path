export interface GraphNodeLegendItem {
	label: string;
	color: string;
	idItem: string;
}

export interface GraphNodeLegendArray {
	legendItems: GraphNodeLegendItem[];
}

export interface GraphNodeLegentTopicItem {
	topicItem?: GraphNodeLegendItem;
}

export interface GraphNodeLegendProps {
	legendProps: GraphNodeLegendArray;
}

export interface GraphNodeLegendTopicProps {
	legendTopicProps: GraphNodeLegentTopicItem;
}
