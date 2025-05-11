import { NodeStatus } from '@/shared/graphql/generated/output';
import { SelectItem } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { useProgressController } from '@/features/view/hooks/use-progress-controller';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui';

const statusMeta: Record<NodeStatus, { label: string; color: string }> = {
	[NodeStatus.NotStarted]: {
		label: 'Не начато',
		color: 'bg-gray-400',
	},
	[NodeStatus.InProgress]: {
		label: 'В прогрессе',
		color: 'bg-yellow-500',
	},
	[NodeStatus.Skipped]: { label: 'Пропущено', color: 'bg-black' },
	[NodeStatus.Completed]: {
		label: 'Завершено',
		color: 'bg-green-500',
	},
};

interface NodeStatusItemProps {
	status: NodeStatus;
}

export const NodeStatusItem = ({ status }: NodeStatusItemProps) => {
	const { label, color } = statusMeta[status];

	return (
		<SelectItem value={status} className="flex items-center gap-2">
			<div className="flex items-center gap-2">
				<span className={cn('w-2 h-2 rounded-full', color)} />
				<span>{label}</span>
			</div>
		</SelectItem>
	);
};


interface Props {
	topicNodeId: string;
	value: NodeStatus | undefined;
	refetch?: () => void;
	refetchProgress?: () => void;
	disabled?: boolean;
}

export const NodeStatusSelect = ({
	topicNodeId,
	value,
	disabled = false,
}: Props) => {
	const { updateTopicStatus } = useProgressController();

	const handleChange = async (status: NodeStatus) => {
		await updateTopicStatus(topicNodeId, status);
	};

	return (
		<Select value={value} onValueChange={handleChange} disabled={disabled}>
			<SelectTrigger className="w-[140px] h-8 text-xs">
				<SelectValue placeholder="Статус" />
			</SelectTrigger>
			<SelectContent>
				<NodeStatusItem status={NodeStatus.NotStarted} />
				<NodeStatusItem status={NodeStatus.InProgress} />
				<NodeStatusItem status={NodeStatus.Skipped} />
				<NodeStatusItem status={NodeStatus.Completed} />
			</SelectContent>
		</Select>
	);
};
