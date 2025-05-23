import { useMemo, useCallback } from 'react';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import {
	TopicEdge,
	UserTopicProgress,
	useUpdateUserTopicProgressStatusMutation,
	NodeStatus,
} from '@/shared/graphql/generated/output';
import { calculateVisibleNodes } from '../calculate-visible-nodes';
import { TopicNodeLite } from '../types';

export const useModeController = ({
	nodes,
	edges,
	initialProgress,
}: {
	nodes: TopicNodeLite[];
	edges: TopicEdge[];
	initialProgress: UserTopicProgress[];
}) => {
	const mode = useViewerStore((s) => s.courseMode);
	const [markCompleted] = useUpdateUserTopicProgressStatusMutation();

	const completedIds = useMemo(
		() =>
			new Set(
				initialProgress
					.filter((p) => p.status === NodeStatus.Completed)
					.map((p) => p.topicNodeId)
			),
		[initialProgress]
	);

	const visibleNodeIds = useMemo(() => {
		return calculateVisibleNodes(
			nodes,
			initialProgress.filter((p) => p.status === NodeStatus.Completed),
			edges,
			mode
		);
	}, [nodes, edges, initialProgress, mode]);

	const markAsCompleted = useCallback(
		async (nodeId: string) => {
			try {
				await markCompleted({
					variables: {
						input: {
							topicNodeId: nodeId,
							status: NodeStatus.Completed,
						},
					},
				});
			} catch (error) {
				console.error('Не удалось сохранить прогресс', error);
			}
		},
		[markCompleted]
	);

	return {
		markAsCompleted,
		visibleNodeIds,
		completedIds,
	};
};