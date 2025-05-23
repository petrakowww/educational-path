'use client';

import { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { useConfettiStore } from '@/shared/managers/store/courses/confetti.store';
import { cn } from '@/shared/lib';
import { useCompleteChapterMutation } from '@/shared/graphql/generated/output';
import { useRouter } from 'next/navigation';

interface VideoPlayerProps {
	videoUrl?: string | null;
	isLocked: boolean;
	completeOnEnd: boolean;
	title: string;
	courseId: string;
	chapterId: string;
	nextChapterId?: string | null;
}

export const VideoPlayer = ({
	videoUrl,
	isLocked,
	completeOnEnd,
	title,
	courseId,
	chapterId,
	nextChapterId,
}: VideoPlayerProps) => {
	const [isReady, setIsReady] = useState(false);
	const confetti = useConfettiStore();
	const router = useRouter();
	const [completeChapter] = useCompleteChapterMutation();

	const onEnd = async () => {
		if (completeOnEnd) {
			try {
				await completeChapter({ variables: { id: chapterId } });
				confetti.onOpen();
				router.refresh();

				if (nextChapterId) {
					router.push(
						`/courses/${courseId}/chapters/${nextChapterId}`
					);
				}
			} catch {
				// Optionally toast error
			}
		}
	};

	if (!videoUrl) return null;

	return (
		<div className="relative aspect-video w-full rounded-md overflow-hidden border bg-black">
			{isLocked ? (
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white gap-2 z-10">
					<Lock className="w-6 h-6" />
					<p className="text-sm">Эта глава недоступна</p>
				</div>
			) : (
				<>
					{!isReady && (
						<div className="absolute inset-0 flex items-center justify-center bg-black z-10">
							<Loader2 className="w-6 h-6 animate-spin text-white" />
						</div>
					)}
					<video
						title={title}
						aria-label={title}
						controls
						className={cn('w-full h-full', !isReady && 'invisible')}
						onCanPlay={() => setIsReady(true)}
						onEnded={onEnd}
					>
						<source src={videoUrl} type="video/mp4" />
						Ваш браузер не поддерживает воспроизведение видео.
					</video>
				</>
			)}
		</div>
	);
};
