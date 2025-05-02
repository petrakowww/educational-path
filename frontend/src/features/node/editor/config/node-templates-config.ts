import { NodeLabel, NodeType } from '../types/node';
import {
	NodeBuilder,
	NodeBuilderChecklist,
	NodeBuilderSubTopic,
	NodeBuilderTodo,
	NodeBuilderTopic,
	NodeBuilderButton,
} from '../utils/core/node-builder';
import {
	nodeBuilderConfig,
	nodeBuilderConfigChecklist,
	nodeBuilderConfigSubTopic,
	nodeBuilderConfigToDo,
	nodeBuilderConfigTopic,
	nodeBuilderConfigButton,
} from './node-builder-config';

export const nodeBuilderRegistry: Record<NodeType, () => NodeBuilder> = {
	[NodeType.title]: () =>
		new NodeBuilder(nodeBuilderConfig, NodeType.title)
			.withLabel(NodeLabel.title)
			.withFontSize(),

	[NodeType.topic]: () =>
		new NodeBuilderTopic(nodeBuilderConfigTopic)
			.withLabel(NodeLabel.topic)
			.withFontSize()
			.withBackgroundColor(),

	[NodeType.subtopic]: () =>
		new NodeBuilderSubTopic(nodeBuilderConfigSubTopic)
			.withLabel(NodeLabel.subtopic)
			.withFontSize()
			.withBackgroundColor(),

	[NodeType.paragraph]: () =>
		new NodeBuilder(nodeBuilderConfig, NodeType.paragraph)
			.withLabel(NodeLabel.paragraph)
			.withTextAlign()
			.withJustification()
			.withFontSize()
			.withFontColor()
			.withFontWeight()
			.withBackgroundColor()
			.withBorderRadius()
			.withBorderWidth()
			.withBorderColor(),

	[NodeType.label]: () =>
		new NodeBuilder(nodeBuilderConfig, NodeType.label)
			.withLabel(NodeLabel.label)
			.withFontSize()
			.withFontColor(),

	[NodeType.button]: () =>
		new NodeBuilderButton(nodeBuilderConfigButton)
			.withLabel(NodeLabel.button)
			.withFontSize()
			.withFontColor()
			.withBackgroundColor()
			.withBorderColor(),

	// [NodeType.legend]: () =>
	// 	new NodeBuilderLegend(nodeBuilderConfigLegend)
	// 		.withFontColor()
	// 		.withFontSize()
	// 		.withBackgroundColor()
	// 		.withBorderColor(),

	[NodeType.todo]: () =>
		new NodeBuilderTodo(nodeBuilderConfigToDo)
			.withFontColor()
			.withFontSize()
			.withBackgroundColor()
			.withBorderColor(),

	[NodeType.checklist]: () =>
		new NodeBuilderChecklist(nodeBuilderConfigChecklist)
			.withBackgroundColor()
			.withBorderColor(),
};
