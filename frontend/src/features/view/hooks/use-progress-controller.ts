import {
	useUpdateProgressValueMutation,
	useUpdateUserTopicProgressStatusMutation,
	NodeStatus,
	useGetCourseProgressQuery,
} from '@/shared/graphql/generated/output';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { toast } from 'sonner';

export const useProgressController = () => {
    const topicMapId = useViewerStore(state => state.topicMapId);
	const [updateProgressMutation] = useUpdateProgressValueMutation();
	const [updateStatusMutation] = useUpdateUserTopicProgressStatusMutation();
	const { refetch } = useGetCourseProgressQuery({variables: {
        topicMapId: topicMapId ?? '',
    }});
	const updateProgressValue = async (topicNodeId: string, value: number) => {
		try {
			await updateProgressMutation({
				variables: {
					topicNodeId,
					value: parseFloat(value.toFixed(2)),
				},
				update: (cache, { data }) => {
					const updated = data?.updateProgressValue;
					if (!updated) return;
					cache.modify({
						id: cache.identify({
							__typename: 'UserTopicProgress',
							id: updated.topicNodeId,
						}),
						fields: {
							progressValue: () => updated.progressValue,
							status: () => updated.status,
						},
					});

                    refetch?.();
				},
			});

			toast.success('Прогресс обновлён');
		} catch {
			toast.error('Ошибка при обновлении прогресса');
		}
	};

	const updateTopicStatus = async (
		topicNodeId: string,
		status: NodeStatus
	) => {
		try {
			await updateStatusMutation({
				variables: {
					input: {
						topicNodeId,
						status,
					},
				},
				update: (cache, { data }) => {
					if (!data?.updateUserTopicProgressStatus) return;
					console.log(data.updateUserTopicProgressStatus.id);
					cache.modify({
						id: cache.identify({
							__typename: 'UserTopicProgress',
							id: data.updateUserTopicProgressStatus.id,
						}),
						fields: {
							status: () =>
								data.updateUserTopicProgressStatus.status,
                            progressValue: () => data.updateUserTopicProgressStatus.progressValue,
						},
					});

                    refetch?.();
				},
			});

			toast.success('Статус узла обновлён');
		} catch {
			toast.error('Ошибка при обновлении статуса', {
				description:
					'Возможно вы не добавили курс и пытаетесь обновить маршрут',
			});
		}
	};

	return {
		updateProgressValue,
		updateTopicStatus,
	};
};
