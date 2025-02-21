export interface GraphNodeLegendItem {
	label: string;
	color: string;
	idItem: string;
}

export interface GraphNodeLegendArray {
	legendItems: GraphNodeLegendItem[];
}

export interface GraphNodeLegendProps {
	legendProps: GraphNodeLegendArray;
}

export interface GraphNodeLegendTopicLink {
	topicItemId: string;
	nodeId: string;
}

export interface GraphNodeLegendTopic {
	topic?: GraphNodeLegendTopicLink;
}

export interface GraphNodeLegendTopicProps {
	legendTopicProps: GraphNodeLegendTopic;
}

export interface GraphNodeLegendItemExtended extends GraphNodeLegendItem {
	nodeId: string;
}
