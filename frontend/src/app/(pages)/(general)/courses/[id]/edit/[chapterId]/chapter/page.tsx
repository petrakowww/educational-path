'use client';

import { useParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle, Button, Skeleton } from '@/shared/ui';
import { ArrowLeft, Eye, LayoutDashboard, Video } from 'lucide-react';

import { ChapterTitleForm } from './_components/chapter-title-form';
import { ChapterDescriptionForm } from './_components/chapter-description';
import { ChapterVideoForm } from './_components/chapter-video-form';
import { useAuth } from '@/app/providers/auth/auth-provider';
import { ChapterActions } from './_components/chapter-actions';
import { IconBadge } from '../../../_components/icon-badge';
import { useGetVideoChapterQuery } from '@/shared/graphql/generated/output';
import { useRouter } from 'next/navigation';

export default function EditVideoChapterPage() {
	const { isAuthenticated } = useAuth();
	const params = useParams();
	const router = useRouter();

	const chapterId =
		typeof params?.chapterId === 'string'
			? params.chapterId
			: Array.isArray(params?.chapterId)
				? params.chapterId[0]
				: '';

	const { data, loading } = useGetVideoChapterQuery({
		variables: { id: chapterId },
		skip: !chapterId || !isAuthenticated,
	});

	if (!isAuthenticated && loading) {
		return (
			<Alert variant="destructive">
				<AlertTitle>Доступ запрещён</AlertTitle>
				<AlertDescription>
					Вы должны быть авторизованы для редактирования главы.
				</AlertDescription>
			</Alert>
		);
	}

	if (loading || !data?.videoChapter)
		return <Skeleton className="h-32 w-full" />;

	const chapter = data.videoChapter;

	const requiredFields = [
		chapter.title,
		chapter.description,
		chapter.videoUrl,
	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;
	const isComplete = requiredFields.every(Boolean);

	return (
		<section className="space-y-6">
			<Button
				variant="ghost"
				onClick={() => router.push(`/courses/${chapter.courseId}/edit`)}
				className="flex items-center gap-2"
			>
				<ArrowLeft className="w-4 h-4" />
				Вернуться к курсу
			</Button>
			{!chapter.isPublished && (
				<Alert>
					<AlertTitle>Глава не опубликована</AlertTitle>
					<AlertDescription>
						Эта глава не будет доступна пользователям, пока вы её не
						опубликуете.
					</AlertDescription>
				</Alert>
			)}

			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-y-1">
					<h1 className="text-2xl font-semibold">Настройка главы</h1>
					<p className="text-sm text-muted-foreground">
						Заполнено {completedFields} из {totalFields}{' '}
						обязательных полей
					</p>
				</div>
				<ChapterActions
					chapterId={chapter.id}
					courseId={chapter.courseId}
					isPublished={chapter.isPublished}
					disabled={!isComplete}
				/>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
				<div className="space-y-6">
					<div className="flex items-center gap-2">
						<IconBadge icon={<LayoutDashboard />} />
						<h2 className="text-lg font-medium">Основные данные</h2>
					</div>
					<ChapterTitleForm chapter={chapter} />
					<ChapterDescriptionForm chapter={chapter} />
				</div>

				<div className="space-y-6">
					<div className="flex items-center gap-2">
						<IconBadge icon={<Video />} />
						<h2 className="text-lg font-medium">Видео</h2>
					</div>
					<ChapterVideoForm chapter={chapter} />
				</div>
			</div>
		</section>
	);
}
