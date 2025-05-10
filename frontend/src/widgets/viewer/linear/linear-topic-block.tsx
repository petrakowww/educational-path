import { cn } from "@/shared/lib";
import { TopicTreeNode } from "./utils";

interface LinearTopicBlockProps {
	node: TopicTreeNode;
	visibleNodeIds: Set<string>;
}

export const LinearTopicBlock = ({ node, visibleNodeIds }: LinearTopicBlockProps) => {
	const isBlocked = !visibleNodeIds.has(node.id);

	return (
		<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
			<h4 className="font-semibold">{node.title}</h4>
			{node.children?.length > 0 && (
				<div className="ml-4 mt-2 border-l pl-4">
					{node.children.map((child) => (
						<LinearTopicBlock
							key={child.id}
							node={child}
							visibleNodeIds={visibleNodeIds}
						/>
					))}
				</div>
			)}
		</div>
	);
};
