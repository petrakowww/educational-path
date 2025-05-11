import { TopicTreeNode } from "../utils";

export const LinearSubTopicNode = ({
	node,
	isBlocked,
}: {
	node: TopicTreeNode;
	isBlocked: boolean;
}) => (
	<div className={cn('border rounded p-3 bg-muted/30', isBlocked && 'opacity-50 pointer-events-none')}>
		<h5 className="font-medium">{node.title}</h5>
	</div>
);
