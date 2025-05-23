'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Badge,
	Button,
	Skeleton,
} from '@/shared/ui';
import Link from 'next/link';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';
import { useGetPopularVideoCoursesExtendedQuery } from '@/shared/graphql/generated/output';

export const PopularVideoCourses = () => {
	const { data, loading } = useGetPopularVideoCoursesExtendedQuery();

	if (loading) {
		return (
			<section className="space-y-6">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<PlayIcon className="w-5 h-5 text-primary" />
					Популярные видеокурсы
				</h2>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 3 }).map((_, idx) => (
						<Skeleton key={idx} className="h-40 w-full" />
					))}
				</div>
			</section>
		);
	}

	const courses = data?.getPopularVideoCourses ?? [];

	return (
		<section className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<PlayIcon className="w-5 h-5 text-primary" />
					Популярные видеокурсы
				</h2>
				<Button variant="link" asChild>
					<Link href="/courses">Смотреть все</Link>
				</Button>
			</div>

			{courses.length > 0 ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{courses.map((course) => (
						<Card key={course.id} className="overflow-hidden flex flex-col">
							{course.imageUrl && (
								<Image
									src={course.imageUrl}
									alt={course.title}
									width={400}
									height={200}
									className="w-full h-40 object-cover"
								/>
							)}
							<CardHeader className="flex-1 space-y-1">
								<CardTitle className="line-clamp-1 text-base">
									{course.title}
								</CardTitle>
								<p className="text-sm text-muted-foreground line-clamp-2">
									{course.description || 'Без описания'}
								</p>
							</CardHeader>
							<CardContent className="flex items-center justify-between border-t pt-2">
								<Badge variant="outline">
									❤ {course.UserVideoCourse?.length ?? 0} добавлений
								</Badge>
								<Button size="sm" asChild variant="secondary">
									<Link href={`/courses/${course.id}`}>Открыть</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="text-muted-foreground text-sm border border-border p-4 rounded-md">
					Популярные видеокурсы пока не найдены. Проверьте позже.
				</div>
			)}
		</section>
	);
};
