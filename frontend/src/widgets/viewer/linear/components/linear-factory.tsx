import { NodeType } from '@/features/node/editor/types/node';
import { TopicTreeNode } from '../utils';
import { LinearTopicNode } from './linear-topic-node';
import { LinearSubTopicNode } from './linear-subtopic-node';
import { LinearTodoNode } from './linear-todo-node';
import { LinearChecklistNode } from './linear-checklist-node';
import { LinearButtonNode } from './linear-button-node';


interface Props {
	node: TopicTreeNode;
	visibleNodeIds: Set<string>;
}

export const LinearNodeFactory = ({ node, visibleNodeIds }: Props) => {
	const isBlocked = !visibleNodeIds.has(node.id);

	switch (node.type) {
		case NodeType.topic:
			return <LinearTopicNode node={node} isBlocked={isBlocked} />;
		case NodeType.subtopic:
			return <LinearSubTopicNode node={node} isBlocked={isBlocked} />;
		case NodeType.todo:
			return <LinearTodoNode node={node} isBlocked={isBlocked} />;
		case NodeType.checklist:
			return <LinearChecklistNode node={node} isBlocked={isBlocked} />;
		case NodeType.button:
			return <LinearButtonNode node={node} isBlocked={isBlocked} />;
		default:
			return null;
	}
};
