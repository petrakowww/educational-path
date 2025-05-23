'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CheckCircle, XCircle } from 'lucide-react';

import { Button } from '@/shared/ui';
import { useConfettiStore } from '@/shared/managers/store/courses/confetti.store';
import {
	useCompleteChapterMutation,
} from '@/shared/graphql/generated/output';

interface CourseProgressButtonProps {
	chapterId: string;
	courseId: string;
	isCompleted?: boolean;
	nextChapterId?: string | null;
}

export const CourseProgressButton = ({
	chapterId,
	courseId,
	isCompleted,
	nextChapterId,
}: CourseProgressButtonProps) => {
	const router = useRouter();
	const confetti = useConfettiStore();
	const [isLoading, setIsLoading] = useState(false);

	const [completeChapter] = useCompleteChapterMutation();

	const handleClick = async () => {
		try {
			setIsLoading(true);

			if (!isCompleted) {
				await completeChapter({
					variables: { id: chapterId },
					refetchQueries: ['GetVideoChapter', 'GetVideoCourse'], 
				});

				if (!nextChapterId) {
					confetti.onOpen();
				}

				if (nextChapterId) {
					router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
				} else {
					router.refresh();
				}
			}

			toast.success('Прогресс обновлён');
		} catch {
			toast.error('Не удалось обновить прогресс');
		} finally {
			setIsLoading(false);
		}
	};

	const Icon = isCompleted ? XCircle : CheckCircle;

	return (
		<Button
			onClick={handleClick}
			disabled={isLoading}
			variant={isCompleted ? 'outline' : 'default'}
			size="sm"
			className="w-full md:w-auto"
		>
			{isCompleted ? 'Пометить как непройдено' : 'Завершить главу'}
			<Icon className="w-4 h-4 ml-2" />
		</Button>
	);
};
