import { useCallback, useMemo } from 'react';
import {
	useMarkChecklistItemMutation,
	useGetChecklistProgressQuery,
} from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';

export const useChecklistProgress = (topicNodeId: string) => {
	const isCourseAdded = useViewerStore((s) => s.isCourseAdded);

	const [markChecklistItem] = useMarkChecklistItemMutation();

	const { data } = useGetChecklistProgressQuery({
		variables: { topicNodeId },
		skip: !topicNodeId,
	});

	const progressMap = useMemo(() => {
		return new Map(
			(data?.getChecklistProgressByTopic ?? []).map((item) => [item.id, item.done])
		);
	}, [data]);

	const handleToggle = useCallback(
		async (checklistItemId: string, done: boolean) => {
			if (!isCourseAdded) {
				toast.warning('Вы не начали курс — изменение чеклиста недоступно.');
				return;
			}

			try {
				await markChecklistItem({
					variables: {
						checkListItemId: checklistItemId,
						done: !done,
					},
					refetchQueries: ['GetUserTopicProgress', 'GetCourseProgress'],
					update: (cache, { data }) => {
						const updated = data?.markChecklistItem;
						if (!updated) return;

						cache.modify({
							id: cache.identify({
								__typename: 'ChecklistItemWithProgress',
								id: updated.checklist.id,
							}),
							fields: {
								done: () => updated.done,
							},
						});

						toast.success('Состояние задачи обновлено');
					},
				});
			} catch (e) {
				console.error(e);
				toast.error('Ошибка при обновлении чеклиста.');
			}
		},
		[isCourseAdded, markChecklistItem]
	);

	return { progressMap, handleToggle };
};
