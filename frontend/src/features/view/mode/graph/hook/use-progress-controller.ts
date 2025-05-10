import { useState, useCallback } from 'react';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import {
	TopicEdge,
	UserTopicProgress,
	useUpdateUserTopicProgressStatusMutation,
} from '@/shared/graphql/generated/output';
import { calculateVisibleNodes } from '../calculate-visible-nodes';
import { NodeStatus } from '@/shared/graphql/generated/output';
import { TopicNodeLite } from '../types';

export const useProgressController = ({
	nodes,
	edges,
	initialProgress,
}: {
	nodes: TopicNodeLite[];
	edges: TopicEdge[];
	initialProgress: UserTopicProgress[];
}) => {
	const mode = useViewerStore((s) => s.courseMode);
    
	const [completedIds, setCompletedIds] = useState<Set<string>>(
		() =>
			new Set(
				initialProgress
					.filter((p) => p.status === NodeStatus.Completed)
					.map((p) => p.topicNodeId)
			)
	);

	const [markCompleted] = useUpdateUserTopicProgressStatusMutation();

	const visibleNodeIds = calculateVisibleNodes(
		nodes,
		[...completedIds].map((id) => ({
			topicNodeId: id,
			status: NodeStatus.Completed,
		})),
		edges,
		mode
	);

	const markAsCompleted = useCallback(
		async (nodeId: string) => {
			try {
				await markCompleted({
					variables: { input: { topicNodeId: nodeId, status: NodeStatus.Completed } },
				});
				setCompletedIds((prev) => new Set(prev).add(nodeId));
			} catch (error) {
				console.error('Не удалось сохранить прогресс', error);
			}
		},
		[markCompleted]
	);

	return {
		markAsCompleted,
		visibleNodeIds,
	};
};
