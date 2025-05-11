import { NodeType } from '@/features/node/editor/types/node';
import { LinearTopicNode } from './linear-topic-node';
import { LinearTodoNode } from './linear-todo-node';
import { LinearChecklistNode } from './linear-checklist-node';
import { LinearButtonNode } from './linear-button-node';
import { LinearParagraphNode } from './linear-paragraph-node';
import { LinearLabelNode } from './linear-label-node';
import { LinearTitleNode } from './linear-title-node';
import { TopicTreeNode } from '../types';

interface Props {
	node: TopicTreeNode;
	visibleNodeIds: Set<string>;
}

export const LinearNodeFactory = ({ node, visibleNodeIds }: Props) => {
	const isBlocked = !visibleNodeIds.has(node.id);

	switch (node.type) {
		case NodeType.topic:
		case NodeType.subtopic:
			return (
				<LinearTopicNode
					node={node}
					isBlocked={isBlocked}
					visibleNodeIds={visibleNodeIds}
				/>
			);
		case NodeType.todo:
			return (
				<LinearTodoNode
					node={node}
					isBlocked={isBlocked}
				/>
			);
		case NodeType.checklist:
			return (
				<LinearChecklistNode
					node={node}
					isBlocked={isBlocked}
				/>
			);
		case NodeType.button:
			return (
				<LinearButtonNode
					node={node}
					isBlocked={isBlocked}
					visibleNodeIds={visibleNodeIds}
				/>
			);
		case NodeType.title:
			return (
				<LinearTitleNode
					node={node}
					isBlocked={isBlocked}
					visibleNodeIds={visibleNodeIds}
				/>
			);
		case NodeType.paragraph:
			return (
				<LinearParagraphNode
					node={node}
					isBlocked={isBlocked}
					visibleNodeIds={visibleNodeIds}
				/>
			);
		case NodeType.label:
			return (
				<LinearLabelNode
					node={node}
					isBlocked={isBlocked}
				/>
			);
		default:
			return null;
	}
};
