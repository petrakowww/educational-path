'use client';

import { Card, CardContent } from '@/shared/ui';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useGetCourseProgressQuery } from '@/shared/graphql/generated/output';

export const CourseProgressCircle = () => {
	const topicMapId = useViewerStore((s) => s.topicMapId);
	const isCourseAdded = useViewerStore((s) => s.isCourseAdded);

	const { data, loading } = useGetCourseProgressQuery({
		variables: { topicMapId: topicMapId ?? '' },
		skip: !topicMapId || !isCourseAdded,
	});

	const progress = (() => {
		if (!data?.getCourseProgress || loading) return 0;
		const { completed, total } = data.getCourseProgress;
		return total > 0 ? Math.round((completed / total) * 100) : 0;
	})();

	const clamped = Math.max(0, Math.min(progress, 100));

	return (
		<Card>
			<CardContent className="p-4 flex items-center gap-4 justify-center">
				<span className="font-semibold text-primary">
					Выполнено курса
				</span>
				<CircularProgressbar
					value={clamped}
					text={`${clamped}%`}
					styles={buildStyles({
						textColor: 'hsl(var(--foreground))',
						pathColor: 'hsl(var(--primary))',
					})}
					className="items-center w-16 h-16"
				/>
			</CardContent>
		</Card>
	);
};
