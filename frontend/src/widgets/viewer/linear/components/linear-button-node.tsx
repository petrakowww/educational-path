import { TopicTreeNode } from "../utils";

export const LinearButtonNode = ({
	node,
	isBlocked,
}: {
	node: TopicTreeNode;
	isBlocked: boolean;
}) => {
	const label = node.data.buttonProps?.label ?? 'Кнопка';
	const link = node.data.buttonProps?.url ?? '#';

	return (
		<div className={cn('border rounded p-4', isBlocked && 'opacity-50 pointer-events-none')}>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm font-medium underline text-primary hover:opacity-80"
			>
				{label}
			</a>
		</div>
	);
};
