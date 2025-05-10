'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/shared/ui';
import { useStartCourseMutation } from '@/shared/graphql/generated/output';
import { Loader2 } from 'lucide-react';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';

interface StartCourseButtonProps {
	topicMapId: string;
}

export const StartCourseButton = ({ topicMapId }: StartCourseButtonProps) => {
	const [startCourse] = useStartCourseMutation();
	const [isPending, startTransition] = useTransition();
	const [retry, setRetry] = useState(false);
	const setCourseAdded = useViewerStore((s) => s.setCourseAdded);

	const handleStart = async () => {
		setRetry(false);
		startTransition(async () => {
			try {
				await startCourse({ variables: { courseDto: { topicMapId } } });
				setCourseAdded(true);
			} catch (e) {
				console.error('Ошибка при добавлении курса:', e);
				setRetry(true);
			}
		});
	};

	if (retry) {
		return (
			<Button variant="outline" className="w-full" onClick={handleStart}>
				Повторить
			</Button>
		);
	}

	return (
		<Button
			variant="default"
			className="w-full flex items-center gap-2"
			onClick={handleStart}
			disabled={isPending}
		>
			{isPending && <Loader2 className="w-4 h-4 animate-spin" />}
			{isPending ? 'Загрузка...' : 'Начать прохождение'}
		</Button>
	);
};
