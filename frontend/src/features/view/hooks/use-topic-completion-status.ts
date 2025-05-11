import { useGetUserTopicProgressQuery, NodeStatus } from '@/shared/graphql/generated/output';

export const useTopicCompletionStatus = (topicNodeId?: string) => {
	const { data, loading, error } = useGetUserTopicProgressQuery({
		variables: { topicNodeId: topicNodeId ?? '' },
		skip: !topicNodeId,
	});

	const isCompleted = data?.getUserTopicProgress.status === NodeStatus.Completed;

	return {
		isCompleted,
		loading,
		error,
	};
};
