'use client';

import { CourseDeadlineCalendar } from './course-deadline-calendar';
import {
	useStartCourseDeadlineMutation,
	useUpdateCourseDeadlineMutation,
	useRemoveCourseDeadlineMutation,
} from '@/shared/graphql/generated/output';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { toast } from 'sonner';
import { parseISO } from 'date-fns';
import { ApolloCache } from '@apollo/client';

interface Props {
	initialDeadline: string | null;
}

export const CourseDeadlineCalendarWrapper = ({ initialDeadline }: Props) => {
	const topicMapId = useViewerStore((s) => s.topicMapId);
	const deadlineDate = initialDeadline ? parseISO(initialDeadline) : null;

	const [startDeadline] = useStartCourseDeadlineMutation();
	const [updateDeadline] = useUpdateCourseDeadlineMutation();
	const [removeDeadline] = useRemoveCourseDeadlineMutation();

	const updateCacheDeadline = (cache: ApolloCache<unknown>, id: string, newDeadline: string | null) => {
		cache.modify({
			id: cache.identify({ __typename: 'UserCourse', id }),
			fields: {
				deadline: () => newDeadline,
			},
		});
	};

	const handleSet = async (date: Date) => {
        if (!topicMapId) return toast.error('Курс не найден');
    
        try {
            if (deadlineDate) {
                await updateDeadline({
                    variables: {
                        topicMapId,
                        deadline: date.toISOString(),
                    },
                    update: (cache, result) => {
                        const userCourse = result.data?.updateCourseDeadline;
                        if (!userCourse) return;
                        updateCacheDeadline(cache, userCourse.id, userCourse.deadline);
                    },
                });
                toast.success('Дедлайн обновлён');
            } else {
                await startDeadline({
                    variables: {
                        topicMapId,
                        deadline: date.toISOString(),
                    },
                    update: (cache, result) => {
                        const userCourse = result.data?.startCourseDeadline;
                        if (!userCourse) return;
                        updateCacheDeadline(cache, userCourse.id, userCourse.deadline);
                    },
                });
                toast.success('Дедлайн установлен');
            }
        } catch {
            toast.error('Не удалось установить дедлайн');
        }
    };
    

	const handleRemove = async () => {
		if (!topicMapId) return toast.error('Курс не найден');

		try {
			await removeDeadline({
				variables: { topicMapId },
				update: (cache, result) => {
					const userCourse = result.data?.removeCourseDeadline;
					if (!userCourse) return;
					updateCacheDeadline(cache, userCourse.id, null);
				},
			});
			toast.success('Дедлайн удалён');
		} catch {
			toast.error('Не удалось удалить дедлайн');
		}
	};

	return (
		<CourseDeadlineCalendar
			deadline={deadlineDate}
			onSet={handleSet}
			onRemove={handleRemove}
		/>
	);
};
