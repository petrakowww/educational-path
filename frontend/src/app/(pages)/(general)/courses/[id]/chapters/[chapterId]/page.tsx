'use client';

import { useParams, useRouter } from 'next/navigation';
import {
	useGetVideoCourseQuery,
} from '@/shared/graphql/generated/output';

import {
	Alert,
	AlertTitle,
	AlertDescription,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Skeleton,
	Separator,
} from '@/shared/ui';

import { VideoPlayer } from '../../_components/video-player';
import { File } from 'lucide-react';
import { staticResources } from '@/shared/lib/utils/public-client';
import { ViewerEditor } from '@/widgets/viewer/content-menu/components/tiptap-content';
import { CourseSidebar } from '../../_components/sidebar/course-sidebar';
import { CourseProgressButton } from '../../_components/course-progress-button';

export default function ChapterPage() {
	const { id: courseId, chapterId } = useParams() as {
		id: string;
		chapterId: string;
	};

	const { data, loading, refetch } = useGetVideoCourseQuery({
		variables: { id: courseId },
		skip: !courseId,
	});

	console.log(data, loading)

	if (loading || !data?.videoCourse) {
		return <Skeleton className="h-32 w-full" />;
	}

	const course = data.videoCourse;
	const hasStarted = (course.UserVideoCourse?.length ?? 0) > 0;

	const publishedChapters = course.chapters
		.filter((ch) => ch.isPublished)
		.sort((a, b) => a.position - b.position);

	const currentChapter = publishedChapters.find((ch) => ch.id === chapterId);
	const isCompleted = currentChapter?.progress?.[0]?.isCompleted === true;
	const nextChapter = getNextChapter(publishedChapters, currentChapter?.id);

	if (!hasStarted || !currentChapter) {
		return (
			<div className="p-4">
				<Alert variant="destructive">
					<AlertTitle>Доступ к главе ограничен</AlertTitle>
					<AlertDescription>Начните курс или проверьте ссылку.</AlertDescription>
				</Alert>
			</div>
		);
	}

	return (
		<div className="flex h-full">
			{/* Sidebar */}
			<div className="hidden md:flex w-72 flex-shrink-0 border-r">
				<CourseSidebar course={course} progressCount={course.chapters.length} />
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-y-auto p-6">
				<div className="max-w-4xl mx-auto space-y-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-xl">{currentChapter.title}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<VideoPlayer
								title={currentChapter.title}
								videoUrl={staticResources.getVideoUrl(currentChapter.videoUrl ?? '')}
								isLocked={false}
								completeOnEnd={!isCompleted}
								chapterId={chapterId}
								courseId={courseId}
								nextChapterId={nextChapter?.id || null}
							/>
							<ViewerEditor content={currentChapter.description || ''} />
							<Separator />
							<CourseProgressButton
								chapterId={chapterId}
								courseId={courseId}
								isCompleted={isCompleted}
								nextChapterId={nextChapter?.id || null}
							/>
						</CardContent>
					</Card>

					{!!course.Attachment?.length && (
						<Card>
							<CardHeader>
								<CardTitle className="text-base">Материалы курса</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2">
								{course.Attachment.map((file) => (
									<a
										key={file.id}
										href={file.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex gap-2 items-center text-sm hover:underline"
									>
										<File className="w-4 h-4" />
										{file.name}
									</a>
								))}
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}

function getNextChapter(chapters: any[], currentId: string | undefined) {
	if (!currentId) return null;
	const index = chapters.findIndex((c) => c.id === currentId);
	return chapters[index + 1] ?? null;
}