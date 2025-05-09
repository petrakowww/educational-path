import { CompletionType, NodeKind } from '@/shared/graphql/generated/output';
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
			.withTitle(NodeLabel.title)
			.withKind(NodeKind.Visual)
			.withCompletionType(CompletionType.None)
			.withFontSize()
			.withShowLabel(true),

	[NodeType.topic]: () =>
		new NodeBuilderTopic(nodeBuilderConfigTopic)
			.withTitle(NodeLabel.topic)
			.withKind(NodeKind.Topic)
			.withCompletionType(CompletionType.Manual)
			.withFontSize()
			.withBackgroundColor()
			.withShowLabel(true),

	[NodeType.subtopic]: () =>
		new NodeBuilderSubTopic(nodeBuilderConfigSubTopic)
			.withTitle(NodeLabel.subtopic)
			.withKind(NodeKind.Topic)
			.withCompletionType(CompletionType.Manual)
			.withFontSize()
			.withBackgroundColor()
			.withShowLabel(true),

	[NodeType.paragraph]: () =>
		new NodeBuilder(nodeBuilderConfig, NodeType.paragraph)
			.withTitle(NodeLabel.paragraph)
			.withKind(NodeKind.Visual)
			.withCompletionType(CompletionType.None)
			.withTextAlign()
			.withJustification()
			.withFontSize()
			.withFontColor()
			.withFontWeight()
			.withBackgroundColor()
			.withBorderRadius()
			.withBorderWidth()
			.withBorderColor()
			.withShowLabel(true),

	[NodeType.label]: () =>
		new NodeBuilder(nodeBuilderConfig, NodeType.label)
			.withTitle(NodeLabel.label)
			.withKind(NodeKind.Visual)
			.withCompletionType(CompletionType.None)
			.withFontSize()
			.withFontColor()
			.withShowLabel(true),

	[NodeType.button]: () =>
		new NodeBuilderButton(nodeBuilderConfigButton)
			.withTitle(NodeLabel.button)
			.withKind(NodeKind.Visual)
			.withCompletionType(CompletionType.None)
			.withFontSize()
			.withFontColor()
			.withBackgroundColor()
			.withBorderColor()
			.withShowLabel(true),

	[NodeType.todo]: () =>
		new NodeBuilderTodo(nodeBuilderConfigToDo)
			.withTitle(NodeLabel.todo)
			.withKind(NodeKind.Markable)
			.withCompletionType(CompletionType.Todo)
			.withFontColor()
			.withFontSize()
			.withBackgroundColor()
			.withBorderColor()
			.withShowLabel(true),

	[NodeType.checklist]: () =>
		new NodeBuilderChecklist(nodeBuilderConfigChecklist)
			.withTitle(NodeLabel.checklist)
			.withKind(NodeKind.Topic)
			.withCompletionType(CompletionType.Todo)
			.withBackgroundColor()
			.withBorderColor()
			.withShowLabel(false),
};
