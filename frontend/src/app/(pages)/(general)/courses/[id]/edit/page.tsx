'use client';

import { useParams } from 'next/navigation';
import { useGetVideoCourseQuery } from '@/shared/graphql/generated/output';
import {
	Skeleton,
	Alert,
	AlertDescription,
	AlertTitle,
} from '@/shared/ui';

import { Actions } from './_components/actions';
import { TitleForm } from './_components/title-form';
import { DescriptionForm } from './_components/description-form';
import { ImageForm } from './_components/image-form';
import { ChaptersForm } from './_components/chapters-form';
import { useAuth } from '@/app/providers/auth/auth-provider';
import { AttachmentForm } from './_components/attachment-form';

export default function EditVideoCoursePage() {
	const { isAuthenticated } = useAuth();
	const params = useParams();
	const courseId =
		typeof params?.id === 'string'
			? params.id
			: Array.isArray(params?.id)
			? params.id[0]
			: '';

	const { data, loading, error } = useGetVideoCourseQuery({
		variables: { id: courseId },
		skip: !courseId || !isAuthenticated,
	});

	console.log(error);

	if (!isAuthenticated && loading) {
		return (
			<Alert variant="destructive">
				<AlertTitle>Доступ запрещён</AlertTitle>
				<AlertDescription>Вы должны быть авторизованы для редактирования курса.</AlertDescription>
			</Alert>
		);
	}

	if (loading || !data?.videoCourse)
		return <Skeleton className="h-32 w-full" />;

	const course = data.videoCourse;

	const requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.chapters.some(ch => ch.isPublished),
	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;
	const isComplete = requiredFields.every(Boolean);

	return (
		<section className="space-y-6">
			{!course.isPublished && (
				<Alert>
					<AlertTitle>Курс не опубликован</AlertTitle>
					<AlertDescription>
						Этот курс не будет виден другим пользователям, пока вы не опубликуете его.
					</AlertDescription>
				</Alert>
			)}

			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-y-1">
					<h1 className="text-2xl font-semibold">Настройка курса</h1>
					<p className="text-sm text-muted-foreground">
						Заполнено {completedFields} из {totalFields} обязательных полей
					</p>
				</div>
				<Actions
					courseId={course.id}
					isPublished={course.isPublished}
					disabled={!isComplete}
				/>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
				<div className="space-y-6">
					<TitleForm course={course} />
					<DescriptionForm course={course} />
					<ImageForm course={course} />
				</div>

				<div className="space-y-6">
					<ChaptersForm course={course} />
					<AttachmentForm course={course}/>
				</div>
			</div>
		</section>
	);
}
