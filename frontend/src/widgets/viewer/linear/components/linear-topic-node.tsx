// variants/linear-topic-node.tsx
import { cn } from '@/shared/lib';
import { TopicTreeNode } from '../utils';

export const LinearTopicNode = ({
	node,
	isBlocked,
}: {
	node: TopicTreeNode;
	isBlocked: boolean;
}) => (
	<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
		<h4 className="font-semibold">{node.title}</h4>
		<p className="text-sm text-muted-foreground mt-1">
			{node.data.topicProps?.description ?? 'Описание отсутствует'}
		</p>
		{node.children?.length > 0 && (
			<div className="ml-4 mt-3 border-l pl-4 space-y-2">
				{node.children.map((child) => (
					<LinearNodeFactory
						key={child.id}
						node={child}
						visibleNodeIds={new Set([...node.visibleIds])}
					/>
				))}
			</div>
		)}
	</div>
);
